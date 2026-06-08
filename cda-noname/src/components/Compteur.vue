<template>
    <div>
        <h1>Compteur :</h1>
        <div class="count">
            <button class="btn btn-primary" @click="sousCount()">-</button>
            <p>{{ count }}</p>
            <button class="btn btn-error" @click="AddCount()" >+</button>
        </div>
    </div>
</template>

<script setup lang='js'>
import {ref} from 'vue';
const count = ref('0');

const AddCount = ()=>{
    
    return count.value ++ ;
}

const sousCount = ()=>{
    if (count.value > 0){
        return count.value -- ;
    }
}
</script>

<style scoped lang="css">
</style>