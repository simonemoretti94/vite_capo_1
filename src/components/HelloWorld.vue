<script>
import { state } from '/state.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
  <h1 class="display-1">Hello world!</h1>
  <div v-for="question in state.multiple_prevenction_b1s" :key="question[0]">
    <p>{{ question[2] }}</p>
  </div>
</template>

<style scoped></style>
