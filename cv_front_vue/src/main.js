import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;
//La base de l'url de mon API
axios.defaults.baseURL = "http://localhost/CV_back_end/";
//déclaration de l'interception de la requete
axios.interceptors.request.use((requete) => {
  console.log("requeteAxios", requete);
  return requete;
});
//déclaration de la reponde de la response
axios.interceptors.response.use((response) => {
  console.log("responseAxios", response);
  return response;
});
//Associer axios au prototype http
Vue.prototype.$http = axios;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
