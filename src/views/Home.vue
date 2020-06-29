<template>
  <div class="home">

  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <b-nav-item class="ml-3" :to="{name:'lista'}"><b-icon icon="house-door-fill" font-scale="2"></b-icon></b-nav-item>
         <b-nav-item class="ml-5" :to="{name:'agregar'}"> Agregar</b-nav-item>
         <b-nav-item class="ml-5" :to="{name:'eliminar'}"> Eliminar</b-nav-item>
         <b-nav-item class="ml-5" :to="{name:'editar'}"> Editar</b-nav-item>
        
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-nav-item right>
          <!-- Using 'button-content' slot -->
    <template>
  <b-button class="mb-2" variant="danger" @click="logout"><b-icon icon="power" aria-hidden="true"></b-icon> Cerrar sesion </b-button>
    </template>
          
         
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<router-view></router-view>

  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  
  name: 'Home',
  components: {
   
  },
  methods: {
  logout(){
   Firebase.auth().signOut().then(accept => {
   this.$router.push('/login');
   console.log(accept)
  });
 },
  },
}
</script>
<style scoped>

</style>
