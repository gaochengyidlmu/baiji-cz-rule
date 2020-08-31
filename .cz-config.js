'use strict';

// 配置用例基于下述提交准则

// #### 解决Bug的代码提交
// - 第一句描述解决了什么问题
// - 第二句描述引入这个问题的原因。
// - 第三句简述解决方案。
// - 最后一句描述代码影响范围（可选）

// #### 新增功能的代码提交
// - Add:新增了什么模块，简述这个模块是做什么用的。
// - Delete: 删除了什么模块，简述为什么删除。
// - Change: 修改了什么模块，简述为什么修改。

// #### 重构功能的代码提交
// - 重构功能的代码提交
// - Refactor：重构了什么代码模块，简述为什么重构。

// #### 测试的代码提交
// - 测试的代码提交
// - Test：简述增加某个模块的测试用例。

module.exports = {
  entry: {
    '【Jira关联分支】': {
      value: '【Jira关联分支】',
      name: 'Jira关联:  在Jira评论中关联分支名',
      issue: {
        prefix: '任务名: ',
        message: '任务名: (如 BMYAPP-1)',
      },
      subject: {
        prefix: '分支名: ',
        message: '分支名: '
      },
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
      },
      footer: {
        prefix: '任务名: ',
        message: '任务名: (如 BMYAPP-1)',
      },
    },
    '【修复】': {
      value: '【修复】',
      name: '修复:      修复Bug',
      scope: {
        prefix: '任务名: ',
        message: '任务名: (如 BMYAPP-1)',
      },
      subject: {
        prefix: '原因: ',
        message: '描述引入这个问题的原因'
      },
      body: {
        prefix: '方案: ',
        message: '简述解决方案'
      },
    },
    '【Merge】': {
      value: '【Merge】',
      name: 'Merge:     合并分支',
      subject: {
        prefix: 'Merge 关系: ',
        message: 'Merge 关系？(e.g. Merge feature/XXXX into master)'
      },
    },
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
      },
      footer: {
        prefix: '任务名: ',
        message: '任务名: (如 BMYAPP-1)',
      },
    },
    '【重构】': {
      value: '【重构】',
      name: '重构:      重构模块功能',
      scope: {
        prefix: '模块: ',
        message: '重构了什么代码模块'
      },
      subject: {
        prefix: '原因: ',
        message: '简述为什么重构'
      },
      body: {
        prefix: '方案: ',
        message: '简述解决方案'
      },
      footer: {
        prefix: '任务名: ',
        message: '任务名: (如 BMYAPP-1)',
      },
    },
  },
};
