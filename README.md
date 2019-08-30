# baiji-cz-rule

本项目修改自 [baiji-cz-rule](https://github.com/lsa2127291/baiji-cz-rule)

![screenshot](screenshot.png)

## Steps
* 首选需要安装commitizen插件: `npm install -g commitizen`.
* 然后再安装: `npm install baiji-cz-rule --save-dev`
* 最后通过配置让 `commitizen` 使用 `baiji-cz-rule` 作为插件。 你需要在`package.json`中加入如下几行代码:

  ```
  "config": {
    "commitizen": {
      "path": "node_modules/baiji-cz-rule"
    }
  }
  ```


## Options

`.cz-config.js`:
- entry: 入口参数，规定commit的类型并且可通过设置各种属性对不同类型commit的提交格式进行定制化
``` javascript
entry: {
    '【新增】': {
      value: '【新增】',
      name: '新增:      新增模块功能',
      subject: {
        prefix: '模块: ',
        message: '新增了什么模块'
      },
      body: {
        prefix: '作用: ',
        message: '简述这个模块是做什么用的'
      }
    },
    '【更新】': {
      value: '【更新】',
      name: '更新:      更新功能',
      subject: {
        prefix: '模块: ',
        message: '更新了什么模块'
      },
      body: {
        prefix: '原因: ',
        message: '简述为什么修改'
      }
    },
    '【修复】': {
      value: '【修复】',
      name: '修复:      修复Bug',
      scope: {
        custom: true,
        message: '描述解决了什么问题，如果有Bug号的时候，带上Bug号'
      },
      subject: {
        prefix: '原因: ',
        message: '描述引入这个问题的原因'
      },
      body: {
        prefix: '方案: ',
        message: '简述解决方案'
      },
      footer: {
        prefix: '影响范围: ',
        message: '描述代码影响范围（可选）'
      }
    },
    '【重构】': {
      value: '【重构】',
      name: '重构:      重构模块功能',
      subject: {
        prefix: '模块: ',
        message: '重构了什么代码模块'
      },
      body: {
        prefix: '原因: ',
        message: '简述为什么重构'
      }
    },
    '【测试用例】': {
      value: '【测试用例】',
      name: '测试用例:  添加测试用例',
      subject: {
        prefix: '用例: ',
        message: '简述增加某个模块的测试用例'
      }
    }
  }
```

- messages: 定义更项信息

``` javascript
messages: {
  type: '请选择本次commit的类型:',
  confirmCommit: '您确认要提交以上的commit吗?'
}
```

- allowCustomScopes: 允许使用自定义范围
