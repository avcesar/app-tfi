import Vue from 'vue'
import VueRouter from 'vue-router'
import Usuarios from '../views/Usuarios.vue'
import PostsUsuario from '../views/PostsUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/PostsUsuario/:id/',
    name: 'PostsUsuario',
    component: PostsUsuario,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
