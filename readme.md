[umi docs](https://umijs.org/zh-CN/docs)

推荐使用yarn
```
# 国内源
$ npm i yarn tyarn -g
# 后面文档里的 yarn 换成 tyarn
$ tyarn -v
# 阿里内网源
$ tnpm i yarn @ali/yarn -g
# 后面文档里的 yarn 换成 ayarn
$ ayarn -v
```

通过官方脚手架创建项目
```
创建项目
yarn create @umijs/umi-app

安装依赖
yarn install

启动项目
yarn start

更多配置在package.json
```

目录结构
```
.
├── ./.editorconfig         编辑器配置
├── ./.gitignore            git忽略文件
├── ./.prettierignore       prettier忽略文件
├── ./.prettierrc           prettier配置
├── ./.umirc.ts             umi配置
├── ./mock
│   └── ./mock/.gitkeep
├── ./package.json          依赖文件
├── ./readme.md
├── ./src
│   └── ./src/pages
│       ├── ./src/pages/index.less
│       └── ./src/pages/index.tsx
├── ./tsconfig.json         ts配置文件
├── ./typings.d.ts
└── ./yarn.lock

global.less 全局样式文件（不需要配置，添加即可）

.env 环境变量
```

路由(主要分为约定式路由和配置式路由，不配置默认为约定式路由)
```

```