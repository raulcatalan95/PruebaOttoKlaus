<template>
  <div id="app">
    
       <router-view/>
      <!--router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/lista">Lista</router-link> | 
      <router-link to="/agregar">Agregar</router-link> | 
      <router-link to="/editar">Editar</router-link--> 
    
   
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
