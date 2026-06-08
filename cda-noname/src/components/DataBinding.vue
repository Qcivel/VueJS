<template>
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img v-bind:src="img" alt="DrMario"/>
  </figure>
  
  <div class="card-body">
    <h2 class="card-title">Data Binding</h2>
    <p>{{ name }}</p>
    <fieldset class="fieldset">
        <legend class="fieldset-legend">What is your name?</legend>
        <input type="text" class="input" v-bind:value="name" />
        <p>{{ age }} ans</p>
        <p>Age + 10 : {{ calcAge() }}</p>
        <p>NB Fétiche : {{ randomNumber }}</p>
    </fieldset>
  </div>
</div>
</template>



<script setup lang='js'>
import {ref} from 'vue';

const img = ref('/DrMario.jpg');
const name = ref('Dr.Mario');

const age = 55;

const calcAge = ()=> {
    return age + 10;
}

const randomNumber = Math.random();
</script>

<style scoped lang="css">
</style>