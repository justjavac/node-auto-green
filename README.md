# node-auto-green

[![Build Status](https://github.com/justjavac/node-auto-green/workflows/ci/badge.svg?branch=main)](https://github.com/justjavac/node-auto-green/actions)

自动保持 GitHub 提交状态常绿。

> a commit a day keeps your girlfriend away.

node-auto-green 是 [auto-green](https://github.com/justjavac/auto-green) 的 Node.js 版本。源自一个 issue [Actions 被禁用，请问是否有腾讯云函数的版本](https://github.com/justjavac/auto-green/issues/17)，于是我用 Node.js 开发了一个版本。

## 安装

```shell
$ npm install auto-green
```

或者使用 yarn：

```shell
$ yarn add auto-green
```

## 使用

```js
const autoGreen = require('auto-green')

const owner = 'justjavac'
const repo = 'tencent-clound-auto-green-test'
const auth = '此处填写 person token'

autoGreen({
  owner,
  repo,
  auth,
  debug: true, // 开启调试模式
})
```

## License

[node-auto-green](https://github.com/justjavac/node-auto-green) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.