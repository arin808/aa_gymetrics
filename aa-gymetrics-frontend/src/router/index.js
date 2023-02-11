import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import EmployeeView from "@/views/EmployeeView.vue";
import LoginView from "@/views/LoginView.vue";

//Establish routes and paths to views
const routes = [
  {
    //Root
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    //About Us page
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    //Employee home view
    path: "/employee",
    name: "employee",
    component: EmployeeView,
  },
  {
    //Login page
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

//Create router object
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
