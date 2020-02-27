import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../view/Home'
import One from './../view/One'
import Two from './../view/Two'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        { path: '/', component: Home},
        { path: '/one', component: One},
        { path: '/two', component: Two}
    ]
})
export default router