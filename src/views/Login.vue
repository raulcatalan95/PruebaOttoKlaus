<template>
  <div class="login">
    
    <br>
     <h2 class="bg-primary">Login</h2>
    
   <div class="formulario bg-primary p-5">
     <h5>Correo Electronico</h5>
      <b-input-group >
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="correo@example.com"  v-model="correo"></b-form-input>
    </b-input-group>
   
   
    <h5>Contraseña</h5>
     <b-input-group >
      <b-input-group-prepend is-text>
        <b-icon icon="lock-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="contraseña"  v-model="contraseña"></b-form-input>
    </b-input-group>
    <button @click="login" class="btn btn-success m-3">Ingresar</button>
</div>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name:'login',
  
  data() {
    return {
      correo:'correo@correo.com',
      contraseña:'123456',
    }
  },
methods: {
  
 login() {
 Firebase.auth().signInWithEmailAndPassword(this.correo,this.contraseña).then(
 accept => {
   alert('fuiste logeado correctamente')
 this.$router.push('/');
 console.log(accept.email)
 },
 reject => {
 alert('usuario no existente')
console.log(reject.message)
 
 
 });
 },

},
}
</script>
<style scoped>
.formulario{
  width: 40%;
  margin: auto;
  color: antiquewhite;
  border-radius: 25px;
}

h2{
  padding: 5px;
  width: 250px;
    margin: auto;
    border-radius: 10px 10px 0px 0px;
    color: antiquewhite;
}
h1{
  font-weight: 800;
}
</style>