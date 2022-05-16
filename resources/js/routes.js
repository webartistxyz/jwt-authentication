import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DashboardComponent from './components/DashboardComponent'
import LoginComponent from './components/LoginComponent'
import LogoutComponent from './components/LogoutComponent'

const routes = [
    {
        path: '/',
        redirect: { name: 'login' }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutComponent
    }
]

const router = new VueRouter({
    routes
})

export default router
