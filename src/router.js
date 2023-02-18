import { createWebHistory, createRouter } from "vue-router";
import signUp from '@/components/signUp.vue';
import userMain from '@/components/user/userMain.vue';

const routes = [
    {
        path: "/",
        component: signUp,
    },
    {
        path: "/userMain",
        component: userMain,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 