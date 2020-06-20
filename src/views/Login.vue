<template>
  <div class="login">
    
    <br>
     <h2 class="bg-primary">Inicia Sesion</h2>
    
   <div class="formulario bg-primary p-5">
     <h5>Correo Electronico</h5>
    <b-form-input
    type="text"
    v-model="correo"
    placeholder="Loquesea@correo.com">
    
    </b-form-input>
    <h5>Contraseña</h5>
    <b-form-input
    type="text"
     v-model="contraseña"
     placeholder="contraseña">
    </b-form-input>
    <button @click="login" class="btn btn-success m-3">Ingresar</button>
</div>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data() {
    return {
      correo:'',
      contraseña:'',
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