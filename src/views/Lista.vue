<template>
  <div class="container mt-4" id="lista">
    <h2>Lista de Productos</h2>
    <div v-show="cargando" class="m-5">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <table v-show="tablaLista" class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juguete, i) in juguetes" :key="i">
          <th>{{ juguete.data.codigo }}</th>
          <td>{{ juguete.data.nombre }}</td>
          <td>{{ juguete.data.stock }}</td>
          <td>${{ juguete.data.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import {mapState} from "vuex"

export default {
  name: "lista",
computed: {
  ...mapState(['juguetes','cargando','tablaLista'])
},

  mounted() {
    //this.cargando = true;
    //this.tablaLista = false;   
    axios
      .get(
        "https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patients"
      )
      .then((data) => {
        this.$store.dispatch("setJuguetes", data.data);
      });
  },
};
</script>
<style scoped></style>
