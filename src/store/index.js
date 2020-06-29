import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes:'',
    cargando:false,
    tablaLista:false,
    
    
  },
  mutations: {
    setJuguetesState(state,juguetes){
  state.juguetes=juguetes
  state.cargando=false
  state.tablaLista=true
    },
  
  },
  actions: {
    setJuguetes({commit},juguetes){
      commit('setJuguetesState',juguetes)
    },
    
  },
  modules: {
  }
})
