const autoGreen = require('..')

const owner = 'justjavac'
const repo = 'tencent-clound-auto-green-test'
const auth = '此处填写 person token'

autoGreen({
  owner,
  repo,
  auth,
  debug: true, // 开启调试模式
})
