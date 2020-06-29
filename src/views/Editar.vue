<template>
  <div class="editar container">
    <table class="table table-warning mt-3">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juguete, i) in juguetes" :key="i">
          <th>{{ juguete.data.codigo }}</th>
          <td>{{ juguete.data.nombre }}</td>
          <td>{{ juguete.data.stock }}</td>
          <td>{{ juguete.data.precio }}</td>

          <td>
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="primerEditar(juguete.id)"
            >
              <i class="el-icon-edit"></i>Editar
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Ingrese los campos Requeridos
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div>
                      <div>
                        <label for="recipient-name" class="col-form-label"
                          >nombre</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          placeholder="Ingrese Nombre"
                          v-model="nombre"
                        />
                      </div>
                      <div>
                        <label for="recipient-name" class="col-form-label"
                          >stock</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          placeholder="Ingrese Stock"
                          v-model="stock"
                        />
                      </div>
                      <div>
                        <label for="recipient-name" class="col-form-label"
                          >Precio</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          placeholder="Ingrese Precio"
                          v-model="precio"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      @click="open()"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
  name: "editar",

  data() {
    return {
      nombre: "",
      stock: "",
      precio: "",
      id: "",
    };
  },
  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
    open() {
      console.log(this.id);

      this.$confirm("¿Estas seguro que desea Editar este producto?", "Editar", {
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        type: "warning",
      })
        .then(() => {
          this.editar();
          this.$message({
            type: "success",
            message: "Producto editado exitosamente",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Editar cancelado",
          });
        });
    },

    primerEditar(id) {
      this.id = id;
      console.log(this.id);
    },

    editar() {
      let producto = {
        nombre: this.nombre,
        stock: this.stock,
        precio: this.precio,
      };
      axios
        .put(
          "https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patient/" +
            this.id,
          producto
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Home" });
        });
    },
  },
};
</script>
<style scoped>
.formulario {
  width: 30%;
  margin: auto;
  background-color: #ffeeba;
}
</style>
