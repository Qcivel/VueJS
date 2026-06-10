<template>
    <div>
        <h1>Compteur :</h1>
        <div class="count">
            <button class="btn btn-primary" @click="sousCount()">-</button>
            <p>{{ count }}</p>
            <button class="btn btn-error" @click="AddCount()" >+</button>
            <p> {{ userFunction }}</p>
        </div>
    </div>
</template>

<script setup lang='js'>
import {ref, computed} from 'vue';

const count = ref('0');
const userName = ref('');

const AddCount = ()=>{
    console.log("addCount");
    return count.value ++ ;
}

const sousCount = ()=>{
    if (count.value > 0){
        console.log("sousCount");
        return count.value -- ;
    }
}

const userFunction = computed(() => {
    console.log("Fonction exécutée");
    if(userName.value == ''){
        return userName.value = 'test'; 
    }else {
        return userName.value = 'un autre test'
    }
});
</script>

<style scoped lang="css">
</style>