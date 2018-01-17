import Vue from 'vue';
import Router from 'vue-router';
// import index from '../views/index/index.vue';
// 此种方式引入即可实现路由懒加载
const index = () => import('../views/index/index.vue');
const city = () => import('../views/city/index.vue');
const card = () => import('../views/card/index.vue');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/city',
            name: 'city',
            component: city,
        },
        {
            path: '/card',
            name: 'card',
            component: card,
        },
    ],
});
