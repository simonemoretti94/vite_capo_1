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
    question_answer(n_question, list) {
      let tempValue = document.getElementById(`question_${n_question}_${list[0]}`).value;
      //console.log(`Question n: ${n_question}`)
      console.log(document.getElementById(`question_${n_question}_${list[0]}`).value);

      list[1].forEach(element => {
        if (element[1] == n_question) {
          console.log(element);
          let tempBtn = document.getElementById(`button_${n_question}_${list[0]}`)
          //console.log(tempBtn);
          if (element[6] == tempValue) {
            console.log('right!');
            tempBtn.classList.remove('btn-danger')
            tempBtn.classList.add('btn-success')
            tempBtn.innerHTML = 'CORRETTO'
          }
          else {
            console.log('wrong!');
            tempBtn.classList.remove('btn-primary')
            tempBtn.classList.add('btn-danger')
            tempBtn.innerHTML = 'INVIA <small>(errore)</small>'
          }
        }
      });
    }
  }
}
</script>

<template>

  <!-- module 1 -->
  <div v-if="state.module_1" id="wrapper" class="mt-5">
    <div v-for="question in state.multiple_prevenction_b1s[1]" :key="question[0]">
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
          <select :name="`question_${question[1]}`"
            :id="`question_${question[1]}_${state.multiple_prevenction_b1s[0]}`">
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
          <button class="btn btn-lg btn-primary bg-gradient"
            @click="question_answer(question[1], state.multiple_prevenction_b1s)"
            :id="`button_${question[1]}_${state.multiple_prevenction_b1s[0]}`">
            Invia
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- module 2 -->
  <div v-if="state.module_2" id="wrapper" class="mt-5">
    <div v-for="question in state.multiple_general_b2s[1]" :key="question[0]">
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
          <select :name="`question_${question[1]}`" :id="`question_${question[1]}_${state.multiple_general_b2s[0]}`">
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
          <button class="btn btn-lg btn-primary bg-gradient"
            @click="question_answer(question[1], state.multiple_general_b2s)"
            :id="`button_${question[1]}_${state.multiple_general_b2s[0]}`">
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
