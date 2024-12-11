<script>
import { state } from '/state.js'

export default {
  name: 'Main',
  data() {
    return {
      state,
    }
  },
  methods: {
    question_answer(text) {
      console.log(text)
    }
  }
}
</script>

<template>
  <!-- <h1 class="display-1">Capo 1!</h1> -->
  <!-- <div v-for="question in state.multiple_general_b2s" :key="question[0]">
    <p>{{ question[2] }}</p>
  </div> -->
  <!-- <div>
    {{ state.multiple_general_b2s[0] }}
  </div> -->

  <div id="wrapper" class="mt-5">
    <div>
      <p><small>Domanda n: <b>{{ state.multiple_general_b2s[0][1] }}</b></small></p>
      <p>{{ state.multiple_general_b2s[0][2] }}</p>
      <hr>
      <div id="sub-wrapper">
        <div>
          <p>{{ state.multiple_general_b2s[0][3] }}</p>
          <p>{{ state.multiple_general_b2s[0][4] }}</p>
          <p>{{ state.multiple_general_b2s[0][5] }}</p>
        </div>
        <div>
          <p>a:
            <input type="radio" :name="state.multiple_general_b2s[0][3]" :id="state.multiple_general_b2s[0][1]">
          </p>
          <p>
            b:
            <input type="radio" :name="state.multiple_general_b2s[0][4]" :id="state.multiple_general_b2s[0][1]">
          </p>
          <p>
            c:
            <input type="radio" :name="state.multiple_general_b2s[0][5]" :id="state.multiple_general_b2s[0][1]">
          </p>
        </div>
      </div>
      <hr>
      <div id="submit">
        <div>
          <button class="btn btn-lg btn-primary bg-gradient" @click="question_answer('ciao')">
            Invia
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div#wrapper {
  margin: auto .5rem;
  border: .5px solid black;
  border-radius: 5px;
  padding: .5rem;

  div {
    /* border: .1px dashed black; */

    p {
      text-align: left;
      margin-left: 5px;
    }

    p:first-child {
      & small {
        color: blue;
      }
    }

    hr {
      margin: .2rem;
    }

    div#sub-wrapper {
      display: flex;

      div:first-child {
        width: 80%;
      }

      div:last-child {
        width: 20%;

        display: flex;
        flex-direction: column;

      }

    }

    div#submit {
      margin: .5rem;
      display: flex;
      justify-content: center;

      div {
        width: 50%;

        button {
          width: 100%;
        }

      }
    }

  }
}
</style>
