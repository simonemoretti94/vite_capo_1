<script>
import { state } from '/state.js';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //emits: [''],
  //props: {
  //greetingMessage: String,
  //},
  components: { //imported components 
    HelloWorld,

  },
  data() { //variables, bool, array, objects and so on

    return {
      //state,
    }
  },
}
</script>

<template>
  <HelloWorld></HelloWorld>
</template>
