<template>
    <div>
        <h1>Style Dynamique</h1>
        <h2>Class</h2>
        <input v-on:input="capterClass($event)"  type="text" class="input validator" required placeholder="hello ou word" 
            pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
            <p v-bind:class="{hello: selectCard1, word: selectCard2}">{{ uneString  }}</p>
        <br>
        <h2>Styles</h2>
        <input v-on:input="capterStyle($event)"  type="text" class="input validator" required placeholder="red ou green" 
            pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
            <p v-bind:style="{backgroundColor: activeColor }">{{ string  }}</p>
        <br>
        <button @click="selectButton()" class="btn btn-soft btn-primary">Clique</button>
        <p v-bind:style="{display: clique ? 'block':'none' }"> Je suis un texte </p>
    </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

const selectCard1 = ref(false);
const selectCard2 = ref(false);
const activeColor = ref(false);
const uneString = ref('');
const string = ref('');
const class1 = ref('');
const clique = ref('false');

function capterClass(event) {
    console.log('event');
    console.log(event);
    uneString.value = event.target.value;
    if(uneString.value === 'hello'){
        selectCard1.value = !selectCard1.value;
    }else if(uneString.value === 'word'){
        selectCard2.value = !selectCard2.value;
    }else{
        selectCard1.value = false;
        selectCard2.value = false;
    }
}


function capterStyle(event){
    string.value = event.target.value;

    if(string.value === 'red'){
        activeColor.value = 'red';
    }else if (string.value === 'green'){
        activeColor.value ='green';
    }else {
        activeColor.value = '';
    }
}

function selectButton(){
    clique.value = !clique.value;
}

watch(clique, (newValue)=>{
    if (newValue === 'none'){
        clique.value = '';
    }
})
</script>

<style scoped lang="css">
.hello {
  background-color: mediumslateblue;
  font-style: italic;
}

.word {
  background-color: chartreuse;
  font-size: large;
}
</style>