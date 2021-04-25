import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            alias: ['/home', '/inicio', '/portada'],
            component: () => import(/* webpackChunkName: "group-foo" */ './components/Inicio.vue')
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            alias: '/acerca',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/SobreMi.vue')
        },
        {
            path: '/contacto',
            name: 'contacto',
            alias: '/contactame',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/Contacto.vue')
        },
        {
            path: '/administrador',
            name: 'administrador',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/Administrador.vue'),
            children: [
                {
                    path: 'simple',
                    component: () => import(/* webpackChunkName: "group-foo" */ './components/TipoAdministrador.vue'),
                },
                {
                    path: 'avanzado',
                    component: () => import(/* webpackChunkName: "group-foo" */ './components/TipoAdministrador.vue'),
                }
            ]
        },
        {
            path: '/post',
            name: 'post',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/Post.vue'),
            children: [
                {
                    path: ':articulo',
                    component: () => import(/* webpackChunkName: "group-foo" */ './components/Articulo.vue'),
                }
            ]
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/NotFound.vue')
        }
    ]
})