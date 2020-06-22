<template>
  <div class="about">
    <router-link to="/">Home</router-link>
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
    <tr v-for="(juguete,i) in juguetes"  :key="i">
      <th>{{juguete.data.codigo}}</th>
      <td>{{juguete.data.nombre}}</td>
      <td>{{juguete.data.stock}}</td>
      <td>{{juguete.data.precio}}</td>
      
      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="primerEditar(juguete.id)">editar</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>
          <div >
            <label for="recipient-name" class="col-form-label">nombre</label>
            <input type="text" class="form-control" id="recipient-name" v-model="nombre">
          </div>
          <div >
           <label for="recipient-name" class="col-form-label">stock</label>
            <input type="text" class="form-control" id="recipient-name" v-model="stock">
            
          </div>
           <div >
           <label for="recipient-name" class="col-form-label">Precio</label>
            <input type="text" class="form-control" id="recipient-name" v-model="precio">
            
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="editar()">editar</button>
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
      nombre:'',
      stock:'',
      precio:'',
      juguetes:'',
      id:''
    }
  },
  methods: {
    primerEditar(id){
       this.id = id
       console.log(this.id)
    },
     editar(){
         
           let producto ={
               nombre:this.nombre,
               stock:this.stock,
               precio:this.precio
           }
   axios.put("https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patient/"+this.id, producto)
    .then(data => {
     
    console.log(data.data)
   alert('producto editado')
   
 })
           
       }
  },
   mounted() {
     axios.get("https://us-central1-vue-crud-rest01.cloudfunctions.net/patients/patients")
  .then(data => {
     this.juguetes=data.data
   // console.log(this.juguetes[1].id)
   })
   },
}
</script>
