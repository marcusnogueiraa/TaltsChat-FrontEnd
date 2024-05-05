import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LobbyView from "../views/LobbyView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "lobby",
    component: LobbyView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
