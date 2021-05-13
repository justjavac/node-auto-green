const { Octokit } = require('@octokit/rest')
const debug = require('debug')('auto-green')

module.exports = async function (options = {}) {
  const { owner, repo, branch = 'main', auth } = options
  const ref = `heads/${branch}`

  if (options.debug) {
    debug.enabled = true
  }

  const octokit = new Octokit({ auth, log: options.debug ? console : {} })

  debug('1. 获取最后一次提交的 SHA')
  const headRef = await octokit.git.getRef({ owner, repo, ref })

  debug('2. 获取最后一次提交的详细信息')
  const latestCommit = await octokit.rest.git.getCommit({
    owner,
    repo,
    commit_sha: headRef.data.object.sha,
  })

  debug('3. 新建 commit')
  const commit = await octokit.rest.git.createCommit({
    owner: owner,
    repo: repo,
    message: 'a commit a day keeps your girlfriend away',
    tree: latestCommit.data.tree.sha,
    parents: [headRef.data.object.sha],
  })

  debug('4. 更新 ref')
  await octokit.git.updateRef({
    owner,
    repo,
    ref,
    sha: commit.data.sha,
  })
}
