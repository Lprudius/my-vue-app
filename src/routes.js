import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Pages
import Home from '@/pages/home'
import NewTask from '@/pages/new-task.vue'

//Routering

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/create-new-task',
            name: 'create-new-task',
            component: NewTask
        },
    ]
})
