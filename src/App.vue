<script>
import { state } from '/state.js';
import Main from './components/Main.vue'

export default {
  name: 'App',
  //emits: [''],
  //props: {
  //greetingMessage: String,
  //},
  components: { //imported components 
    Main,

  },
  data() { //variables, bool, array, objects and so on

    return {
      //state,
    }
  },
}
</script>

<template>
  <Main></Main>
</template>
