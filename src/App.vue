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
      //state,
    }
  },
}
</script>

<template>
  <Offcanvas></Offcanvas>
  <Main></Main>
</template>
