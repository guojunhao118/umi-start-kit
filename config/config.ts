export default {
    base: '/docs/',
    publicPath: '/static/',
    hash: true,
    history: {
        type: 'hash',
    },
    routes: [{ path: '/', component: '@/pages/index' }],
};
