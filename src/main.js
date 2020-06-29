import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//element
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

// Firebase
import Firebase from 'firebase'


 const FirebaseConfig = {
  apiKey: "AIzaSyBuNM9UgPbgvs7bC0PsNJO48ZfbRSvY11c",
  authDomain: "vue-crud-rest01.firebaseapp.com",
  databaseURL: "https://vue-crud-rest01.firebaseio.com",
  projectId: "vue-crud-rest01",
  storageBucket: "vue-crud-rest01.appspot.com",
  messagingSenderId: "98556152904",
  appId: "1:98556152904:web:c04a2858e8a6c266f21c7d"
};


 // Agregar su objeto de configuración según su proyecto

Firebase.initializeApp(FirebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//  Firebase autenticación 
//  Firebase-tools cloud function y para el hosting
//  Recuerda que al tener instalado firebase-tools debes
//  usar el comando firebase login
//  y luego firebase init
//  Selecciona Hosting, Firestore, Functions


//  Pendientes con importar axios en el componente que lo necesiten!!
