import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../views/Login.vue"
import menuPrincipal from '../views/menuPrincipal.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/menuPrincipal',
        name: 'menuPrincipal',
        component: menuPrincipal
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;