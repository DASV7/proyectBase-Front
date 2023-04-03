import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../components/login/Login.vue"
import menuPrincipal from '../views/menuPrincipal.vue'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/menuPrincipal',
        name: 'MenuPrincipal',
        component: menuPrincipal
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;