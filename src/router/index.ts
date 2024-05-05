import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LobbyView from "../views/LobbyView.vue";
import ChatView from "../views/ChatView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "lobby",
    component: LobbyView,
  },
  {
    path:"/chat",
    name:"chat",
    component: ChatView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
