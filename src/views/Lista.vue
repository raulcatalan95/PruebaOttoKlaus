<template>
    <div class="container mt-4" id="lista">

    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Stock</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(juguete,i) in juguetes"  :key="i">
      <th>{{juguete.data.codigo}}</th>
      <td>{{juguete.data.nombre}}</td>
      <td>{{juguete.data.stock}}</td>
      <td>{{juguete.data.precio}}</td>
    </tr>
    
      
  </tbody>
</table>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
        data() {
        return {
         juguetes:''
        }
    },
 mounted(){
      axios.get("https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patients")
  .then(data => {
     this.juguetes=data.data
    console.log(this.juguetes)
   
 })
},
}
</script>
<style scoped>

</style>