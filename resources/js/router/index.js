import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld";

const routes = [
    {
        path: '/',
        name: 'hello.world',
        component: HelloWorld,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
