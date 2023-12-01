import { createRouter, createWebHistory  } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import( '../views/LoginView.vue')
  },{
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import( '../views/ProfileView.vue')
  },{
    path: '/university',
    name: 'university',
    meta: {layout: 'main'},
    component: () => import( '../views/UniversityView.vue')
  },{
    path: '/groups',
    name: 'groups',
    meta: {layout: 'main'},
    component: () => import( '../views/GroupsView.vue')
  },{
    path: '/students',
    name: 'students',
    meta: {layout: 'main'},
    component: () => import( '../views/StudentsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {layout: 'empty'},
    component: () => import( '../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
