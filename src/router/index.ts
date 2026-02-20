import { createRouter, createWebHistory } from 'vue-router'
import login from "@/components/login.vue";
import studentList from "@/components/studentList.vue";
import dashboard from "@/components/dashboard.vue";
import studentInfo from "@/components/studentInfo.vue";
import profile from "@/components/profile.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/studentList",
      name: "studentList",
      component: studentList
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard
    },
    {
      path: "/studentInfo",
      name: "studentInfo",
      component: studentInfo
    },
    {
      path: "/profile",
      name: "profile",
      component: profile
    }
   ]
});

export default router;
