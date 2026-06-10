<template>
    <div>
        <h1>Compteur :</h1>
        
        <div class="count">
            <button class="btn btn-primary" @click="addCount()">+1</button>
            <p>{{ count }}</p>
            <button class="btn btn-error" @click="AddFive()" >+5</button>
            <p class="text-primary">{{ message }}</p>
        </div>
    </div>
</template>

<script setup lang='js'>
import {ref, watch} from 'vue';

const count = ref(0);
const numberMystere = ref(12);
const message = ref("");

const AddFive = ()=>{
    return count.value += 5;
}

const addCount = ()=>{
    return count.value ++ ;
}

watch(count, (newValue) => {
    if (newValue < numberMystere.value){
        message.value = "Essaie encore";
    }else if (newValue === numberMystere.value) {
        message.value ="le nombre mystere est bien " + numberMystere.value;
    }else if (newValue > numberMystere.value) {
        message.value = "Tu as dépassé le nombre";
        setTimeout(() => {
            message.value = ""; 
            count.value = 0;   
        }, 3000);
    }
});
</script>

<style scoped lang="css">
</style>