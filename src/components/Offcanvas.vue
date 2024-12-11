<script>
import { state } from '/state.js'

export default {
    name: 'Offcanvas',
    data() {
        return {
            state,
        }
    }
}

</script>

<template>
    <p id="offcanvas_box" data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1">&LeftArrow;
        <small><u>Clicca qui per i
                moduli</u></small>
    </p>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="Id1"
        aria-labelledby="Enable both scrolling & backdrop">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">
                Gestione moduli
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="div_wrapper">
                <div>
                    <p>
                        Modulo 1
                    </p>
                </div>
                <div>
                    <span class="span-activate" v-if="state.module_1"
                        @click="state.module_1 = false">Disattiva</span><span class="span-deactivate"
                        v-if="!state.module_1" @click="state.module_1 = true">Attiva</span>
                </div>
            </div>
            <hr>

            <p>
                Modulo 2
            </p>
            <hr>
            <p>
                Modulo 3
            </p>
            <hr>
            <p>
                Modulo 4
            </p>
            <hr>
            <p>
                Modulo 5
            </p>
            <hr>
        </div>
    </div>

</template>

<style scoped>
p#offcanvas_box {
    display: inline-block;
    padding: .25rem;
    box-shadow: 1px 2px black;

    :hover {
        color: red;
        border-radius: 5px;
    }
}

div.div_wrapper {
    display: flex;

    div:first-child {
        width: 80%;
        text-align: left;
    }

    div:last-child {
        width: 20%;
        text-align: center;

        span {
            border: solid .5px black;
            padding: .25rem;
            border-radius: 6px;
        }

        span.span-activate {
            color: blue;
        }

        span.span-deactivate {
            color: red;
        }
    }
}
</style>