import { createWebHistory, createRouter } from "vue-router";
import signUp from '@/components/signUp.vue';
import userMain from '@/components/user/userMain.vue';
import operMain from '@/components/oper/operMain.vue';
import operCloud from '@/components/oper/operCloud.vue';
import operCreate from '@/components/oper/operCreate.vue';

const routes = [
    {
        path: "/",
        component: signUp,
    },
    {
        path: "/userMain",
        component: userMain,
    },
    {
        path: "/operMain",
        component: operMain,
    },
    {
        path: "/operCloud",
        component: operCloud,
    },
    {
        path: "/operCreate",
        component: operCreate,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router; 