import { defineConfig } from 'umi';

export default defineConfig({
    // 过滤node_modules
    nodeModulesTransform: {
        type: 'none',
    },
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
