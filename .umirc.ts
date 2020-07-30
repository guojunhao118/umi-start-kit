import { defineConfig } from 'umi';

export default defineConfig({
    // 过滤node_modules
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/login',
            exact: true,
            component: '@/pages/login/login',
        },
    ],
    // 路由信息
    // routes: [{ path: '/', component: '@/pages/index' }],
    // 常用配置
    // base: '/docs/',
    // publicPath: '/static/',
    // hash: true,
    // history: {
    //     type: 'hash',
    // },
});
