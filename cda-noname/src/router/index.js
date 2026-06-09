import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', alias: '/home', name: 'Home', component: () => import('../components/Home.vue') },
        { path: '/about', name: 'About', component: () => import('../components/About.vue') },
        { path: '/contact', name: 'Contact', component: () => import('../components/Contact.vue') },
        { path: '/text', name: 'Text', component: () => import('../components/Text.vue') },
        { path: '/dataBinding', name: 'DataBinding', component: () => import('../components/DataBinding.vue') },
        { path: '/compteur', name: 'Compteur', component: () => import('../components/Compteur.vue') },
        { path: '/eventBinding', name: 'EventBinding', component: () => import('../components/EventBinding.vue') },
    ],
});

export default router;