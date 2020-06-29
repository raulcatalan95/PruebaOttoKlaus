<template>
  <div class="eliminar container">
    <h2 class="mt-3">Eliminar Productos</h2>
    <div v-show="cargando" class="m-5">
      <b-spinner label="Loading..." variant="danger"></b-spinner>
    </div>
    <table class="table table-danger mt-3" v-show="tablaLista">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juguete, i) in juguetes" :key="i">
          <th>{{ juguete.data.codigo }}</th>
          <td>{{ juguete.data.nombre }}</td>
          <td>{{ juguete.data.stock }}</td>
          <td>{{ juguete.data.precio }}</td>
          <td>
            <button class="btn btn-danger" @click="open(juguete.id)">
              <b-icon icon="trash"></b-icon> Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "eliminar",
  data() {
    return {
    id: "",
    };
  },
  computed: {
     ...mapState(['juguetes','cargando','tablaLista']),
  },
  methods: {
    open(id) {
      this.id = id;
      console.log(this.id);

      this.$confirm(
        "¿Estas seguro que desea eliminar este producto?",
        "Eliminar",
        {
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
          type: "warning",
        }
      )
        .then(() => {
          this.eliminar();
          this.$message({
            type: "success",
            message: "Producto Eliminado exitosamente",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Eliminar cancelado",
          });
        });
    },

    eliminar() {
      axios
        .delete(
          "https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patient/" +
            this.id
        )
        .then((data) => {
          console.log(data.data);
          this.$router.push({ name: "Home" });
        });
    },
  },
};
</script>
