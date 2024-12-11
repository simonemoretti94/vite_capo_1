<script>
import { state } from '/state.js'

export default {
  name: 'Main',
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
  <h1 class="display-1">Capo 1!</h1>
  <div v-for="question in state.multiple_general_b2s" :key="question[0]">
    <p>{{ question[2] }}</p>
  </div>
</template>

<style scoped></style>
