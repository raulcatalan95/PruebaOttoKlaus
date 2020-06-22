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
    <tr v-for="(juguete,i) in juguetes"  :key="i">
      <th>{{juguete.data.codigo}}</th>
      <td>{{juguete.data.nombre}}</td>
      <td>{{juguete.data.stock}}</td>
      <td>{{juguete.data.precio}}</td>
      <td><button type="button" class="btn btn-danger"  data-toggle="modal" data-target="#exampleModal" @click="primerEliminar(juguete.id)">Eliminar</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{mensajeModal}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" v-show="modalBody">
      <h5>¿Estas seguro de Eliminar este Producto?</h5>
      </div>
      <div class="modal-footer" v-show="modalFooter">
          <button type="button" class="btn btn-primary"   @click="eliminar">Aceptar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        
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
import axios from 'axios'
export default {
  data() {
    return {
      juguetes:'',
      cargando:false,
      tablaLista:true,
      modalFooter:true,
      modalBody:true,
      id:''
    }
  },
  methods:{
    primerEliminar(id){
     this.id=id
    },
eliminar(){
 axios.delete("https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patient/"+this.id)
    .then(data => {
     
    console.log(data.data)
   this.modalFooter=false
    this.modalBody=false
   
 })
}
  },
  mounted(){
   this.cargando=true
   this.tablaLista=false
      axios.get("https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patients")
  .then(data => {
     this.juguetes=data.data
    console.log(this.juguetes)
    this.cargando=false
    this.tablaLista=true
   
 })
},
computed: {
    mensajeModal(){
if (this.modalBody==false) {
    return 'Producto Eliminado con exito'
}else{
    return ''
}
    }
},
}
</script>