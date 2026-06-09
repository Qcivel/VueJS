<template>
    <div>
        <h1>EventBinding</h1>
        <input v-on:input="capterInput($event)" type="text" class="input validator" required placeholder="Text" 
        pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
            <p > {{ uneString }}</p>

        <input @keyup.esc="keyInput($event)" type="text" class="input validator" required placeholder="TextEchap" 
        pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
            <p > {{ string }}</p>

        <button @click="alerte()" class="btn btn-primary">Bonjour !</button>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const uneString = ref('Bonjour');
const string = ref('Bonjour');
function capterInput(event) {
    console.log('event');
    console.log(event);
    uneString.value = event.target.value;
}

function keyInput(event){
    string.value = event.target.value;
}

function alerte(){
    return alert('Bonjour !');
}

</script>

<style scoped lang="css">
</style>