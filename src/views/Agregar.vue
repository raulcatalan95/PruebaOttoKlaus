<template>
    <div class="container agregar">
        <div class="formulario bg-warning p-5 mt-5">
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
        <button type="button" class="btn btn-primary" @click="Agregar">Agregar</button>
        
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

    })
},
}
}


</script>
<style scoped>
.formulario{
    display: flex;
    flex-direction: column;
    color: black;
    
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