<script>
import { state } from '/state.js'

export default {
  name: 'Main',
  data() {
    return {
      state,

      scroll_Y: null,
      scroll_down: false,
    }
  },
  methods: {

    // multiple and tf logics
    question_answer(n_question, list) {
      let tempValue = document.getElementById(`question_${n_question}_${list[0]}`).value;
      console.log(document.getElementById(`question_${n_question}_${list[0]}`).value);

      list[1].forEach(element => {
        if (element[1] == n_question) {
          console.log(element);
          let tempBtn = document.getElementById(`button_${n_question}_${list[0]}`)
          console.log(tempBtn);

          let tempAnswer = null
          if (tempValue == '0' || tempValue == '1') { // activates whent the question is tf
            tempAnswer = parseInt(tempValue);
            //console.log(tempAnswer, typeof tempAnswer);
            if (element[3] == tempAnswer) {
              console.log('right!');
              tempBtn.classList.remove('btn-danger')
              tempBtn.classList.add('btn-success')
              tempBtn.innerHTML = 'CORRETTO'
            }
            else {
              tempBtn.classList.remove('btn-primary')
              tempBtn.classList.add('btn-danger')
              tempBtn.innerHTML = 'INVIA <small>(errore)</small>'
            }
          }
          else { // activates when the question is multiple
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
        }
      });
    },
    // Scrolling to page's top
    backToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll_Y = window.scrollY;
      //console.log(`window: ${window.scrollY}\nvar: ${this.scroll_Y}`);
      if (window.scrollY > 0) {
        this.scroll_down = true;
      }
      else {
        this.scroll_down = false;
      }
    });
  },
}
</script>

<template>
  <section id="main_section">
    <h6 id="service_h6">Questo è un sito mobile first, non supporta<br>viewports > 768px</h6>
    <div id="div_scroll">
      <span id="to_top" @click="backToTop()" v-if="this.scroll_down">
        Torna su
      </span>
    </div>

    <!-- multiple answers -->

    <!-- module 1 -->
    <div v-if="state.module_1" :id="`wrapper_${state.multiple_prevenction_b1s[0][0]}`" class="mt-3">
      <h6 class="my-2 display-6 text-center">{{ state.multiple_prevenction_b1s[2][0] }}</h6>
      <hr>
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
    <div v-if="state.module_2" :id="`wrapper_${state.multiple_general_b2s[0][0]}`" class="mt-3">
      <h6 class="my-2 display-6 text-center">{{ state.multiple_general_b2s[2][0] }}</h6>
      <hr>
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

    <!-- module 3 -->
    <div v-if="state.module_3" :id="`wrapper_${state.multiple_helihems_b3s[0][0]}`" class="mt-3">
      <h6 class="my-2 display-6 text-center">{{ state.multiple_helihems_b3s[2][0] }}</h6>
      <hr>
      <div v-for="question in state.multiple_helihems_b3s[1]" :key="question[0]">
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
            <select :name="`question_${question[1]}`" :id="`question_${question[1]}_${state.multiple_helihems_b3s[0]}`">
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
              @click="question_answer(question[1], state.multiple_helihems_b3s)"
              :id="`button_${question[1]}_${state.multiple_helihems_b3s[0]}`">
              Invia
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- module 4 -->
    <div v-if="state.module_4" :id="`wrapper_${state.multiple_helitechnique_b4s[0][0]}`" class="mt-3">
      <h6 class="my-2 display-6 text-center">{{ state.multiple_helitechnique_b4s[2][0] }}</h6>
      <hr>
      <div v-for="question in state.multiple_helitechnique_b4s[1]" :key="question[0]">
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
              :id="`question_${question[1]}_${state.multiple_helitechnique_b4s[0]}`">
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
              @click="question_answer(question[1], state.multiple_helitechnique_b4s)"
              :id="`button_${question[1]}_${state.multiple_helitechnique_b4s[0]}`">
              Invia
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- module 5 -->
    <div v-if="state.module_5" :id="`wrapper_${state.multiple_firstaid_b5s[0][0]}`" class="mt-3">
      <h6 class="my-2 display-6 text-center">{{ state.multiple_firstaid_b5s[2][0] }}</h6>
      <hr>
      <div v-for="question in state.multiple_firstaid_b5s[1]" :key="question[0]">
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
            <select :name="`question_${question[1]}`" :id="`question_${question[1]}_${state.multiple_firstaid_b5s[0]}`">
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
              @click="question_answer(question[1], state.multiple_firstaid_b5s)"
              :id="`button_${question[1]}_${state.multiple_firstaid_b5s[0]}`">
              Invia
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- tf answers -->

    <!-- module 1 -->
    <div v-if="state.module_tf_1" :id="`wrapper_${state.tf_prevenction_b1s[0][0]}`" class="mt-3">
      <h6 class="my-2 display-6 text-center">{{ state.tf_prevenction_b1s[2][0] }}</h6>
      <hr>
      <div v-for="question in state.tf_prevenction_b1s[1]" :key="question[0]">
        <p><small>Domanda n: <b>{{ question[1] }}</b></small></p>
        <p>{{ question[2] }}</p>
        <hr>
        <div id="sub-wrapper">
          <div class="w-100  d-flex flex-row">
            <select class="w-50 text-center" :name="`question_${question[1]}`"
              :id="`question_${question[1]}_${state.tf_prevenction_b1s[0]}`" style="height: 30px; margin: auto auto;">
              <option selected disabled class="text-center">&DownArrow;</option>
              <option value="1">Vero</option>
              <option value="0">Falso</option>
            </select>
            <div id="submit" class="w-50">
              <div class="w-100">
                <button class="btn btn-lg btn-primary bg-gradient"
                  @click="question_answer(question[1], state.tf_prevenction_b1s)"
                  :id="`button_${question[1]}_${state.tf_prevenction_b1s[0]}`">
                  Invia
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>

  </section>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section#main_section {
  position: relative;

  div#div_scroll {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    margin-bottom: .5rem;

    span#to_top {
      background: linear-gradient(180deg, rgb(213, 213, 213), white, rgb(213, 213, 213));
      border: solid 1px rgb(155, 155, 155);
      border-radius: 5px;
      padding: 2px 8px;
      color: rgba(0, 0, 0, 0.759);
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: 500;
      cursor: pointer;
    }
  }
}

h6#service_h6 {
  display: none;
  color: white;
  text-align: center;
}

@media screen and (min-width: 450px) {
  section#main_section {
    max-width: 450px;
    margin: auto auto;
  }

  h6#service_h6 {
    display: block;
  }
}

@media screen and (min-width: 768px) {
  h6#service_h6 {
    display: block;
  }
}

div[id^='wrapper_'] {
  background-color: white;
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
