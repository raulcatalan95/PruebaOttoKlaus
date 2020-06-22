<template>
    <div class="container agregar">
        <div class="formulario p-5 mt-5" >
            <h2>Agregar Producto</h2>
          <div class="codigo m-3 row" >
              <h5 class="col-2">Codigo :</h5>
          <input class="form-control col-10" type="text" placeholder="codigo" v-model="codigo">
           </div>
           <div class="nombre m-3 row">
               <h5 class="col-2">Nombre :</h5>
          <input class="form-control col-10" type="text" placeholder="nombre" v-model="nombre">
           </div>
           <div class="stock m-3 row">
               <h5 class="col-2">Stock :</h5>
          <input class="form-control col-10" type="text" placeholder="stock" v-model="stock">
           </div>
           <div class="precio m-3 row">
               <h5 class="col-2">Precio :</h5>
          <input class="form-control col-10" type="text" placeholder="precio" v-model="precio">
          </div>
          <div> 
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Agregar</button>

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
      <h5>¿Estas seguro de Agregar este Producto?</h5>
      </div>
      <div class="modal-footer" v-show="modalFooter">
          <button type="button" class="btn btn-primary"   @click="Agregar">Aceptar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        
      </div>
    </div>
  </div>
</div>
        
          </div>
         
        </div>
         
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
           codigo:'',
           nombre:'',
           stock:'',
           precio:'',
           modalFooter:true,
           modalBody:true
        }
    },
methods: {
    Agregar(){
        let producto = {
            codigo:this.codigo,
            nombre:this.nombre,
            stock:this.stock,
            precio:this.precio
        };
      axios.post("https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patient",producto)
  .then(respuesta => {
     console.log(respuesta.message)
     this.modalFooter=false
     this.modalBody=false

      this.codigo=''
      this.nombre=''
      this.stock=''
      this.precio=''


     })
},
},
computed: {
    mensajeModal(){
if (this.modalBody==false) {
    return 'Producto agregado con exito'
}else{
    return ''
}
    }
},
}


</script>
<style scoped>
.formulario{
    display: flex;
    flex-direction: column;
    background-color: #17a2b84a;
    
    
}
.codigo{
    display: flex;
    flex-direction: row;
}
.nombre{
    display: flex;
    flex-direction: row;
}
.stock{
    display: flex;
    flex-direction: row;
}
.precio{
    display: flex;
    flex-direction: row;
}
</style>