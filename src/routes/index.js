import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/login/Login.vue";
import menuPrincipal from "../views/menuPrincipal.vue";
import Ecommers from '../components/eEcommersComponent/ecommers.vue'
import carritoDeCompras from '../components/carrito/Comp.carritoDeCompras.vue'
import prueba from '../views/Prueba.vue'
const routes = [
  {
    path: "/",
    name: "prueba",
    component: prueba,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/menuPrincipal",
    name: "MenuPrincipal",
    component: menuPrincipal,
  },
  {
    path: "/Ecommers",
    name: "Ecommers",
    component: Ecommers,
  },
  {
    path: "/carritoDeCompras",
    name: "carritoDeCompras",
    component: carritoDeCompras,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
