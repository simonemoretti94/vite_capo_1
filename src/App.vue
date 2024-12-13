<script>
import { state } from '/state.js'
import Main from './components/Main.vue'
import Offcanvas from './components/Offcanvas.vue'

export default {
  name: 'App',
  //emits: [''],
  //props: {
  //greetingMessage: String,
  //},
  components: { //imported components 
    Main,
    Offcanvas,
  },
  data() { //variables, bool, array, objects and so on

    return {
      state,
    }
  },
}
</script>

<template>
  <Offcanvas></Offcanvas>
  <Main></Main>
  <div id="empty" v-if="!state.module_1 && !state.module_2 && !state.module_3 && !state.module_4 && !state.module_5">
    <h1 class="text-center display-1 text-white">Nessun modulo selezionato</h1>
    <hr class="my-1">
    <h6 class="text-center">Seleziona un modulo utilizzando il pulsante '<small>Clicca qui per i moduli</small>' in alto
      a sinistra</h6>
  </div>
</template>

<style scoped>
div#empty {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    width: 90%;
    color: #888888;
  }
}
</style>
