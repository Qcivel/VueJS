<template>
    <div>
        <h1>v-if conditional rendering</h1>
        <h2>WatchList (Film à voir)</h2>
        <form action="" @submit.prevent="selectButton()">
            <input v-on:input="AddFilm($event)" type="text" class="input validator" required placeholder="Ajouter un film"  minlength="3" maxlength="30"/>
            <button  class="btn btn-soft btn-primary">Ajouter à votre liste</button>
        </form>
        <p v-if="film.length === 0">Aucun film ajouté</p>
        <p v-else>Les films : {{ film }}</p>
        <ul>
            <li @click="deleteFilm(index)" v-for="(films,index) in film" :key="index">{{ films }} {{ index }} </li>
        </ul>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const unFilm =ref('');
const film = ref([]);

function AddFilm(event){
    unFilm.value = event.target.value;
    
}

function selectButton(){
    film.value.push(unFilm.value);
}

function deleteFilm(index){
    film.value.splice(index,1)
}
</script>

<style scoped lang="css">
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button{
    width: 200px;
    
}


</style>