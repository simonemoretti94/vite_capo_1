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
      console.log(`Question n: ${text}`)
      console.log(document.getElementById(`question_${text}`).value);
    }
  }
}
</script>

<template>

  <div id="wrapper" class="mt-5">
    <div v-for="question in state.multiple_general_b2s" :key="question[0]">
      <p><small>Domanda n: <b>{{ question[1] }}</b></small></p>
      <p>{{ question[2] }}</p>
      <hr>
      <div id="sub-wrapper">
        <div>
          <p><small class="text-primary"><b>a: </b></small>{{ question[3] }}</p>
          <p><small class="text-primary"><b>b: </b></small>{{ question[4] }}</p>
          <p><small class="text-primary"><b>c: </b></small>{{ question[5] }}</p>
        </div>
        <div>
          <!-- <p>a:
            <input type="radio" :name="question[3]" :id="`${question[1]}_1`">
          </p>
          <p>
            b:
            <input type="radio" :name="question[4]" :id="`${question[1]}_2`">
          </p>
          <p>
            c:
            <input type="radio" :name="question[5]" :id="`${question[1]}_3`">
          </p> -->
          <select :name="`question_${question[1]}`" :id="`question_${question[1]}`">
            <option selected disabled class="text-center">&DownArrow;</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>
      </div>
      <hr>
      <div id="submit">
        <div>
          <button class="btn btn-lg btn-primary bg-gradient" @click="question_answer(question[1])">
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
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
          font-size: small;
        }
      }

      div:last-child {
        width: 20%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

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
