import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Update from "./views/Update.vue";
import Create from "./views/Create.vue";
import Delete from "./views/Delete.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Update",
      component: Update,
    },
    {
      path: "/Create",
      component: Create,
    },
    {
      path: "/Delete",
      component: Delete,
    },
  ],
});
