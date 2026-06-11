<template>
    <h1>Life Cycle + Fetch API</h1>
    <div>
        <h2>Les Pokémon :</h2>
        <p v-for="(pokemon, index) in pokemonList ">{{ pokemon.name }}</p>
    </div>

    <div>
        <h2>Météo Toulouse : </h2>
        <p v-if="meteoList">Température max : {{ meteoList.fcst_day_0.tmax }} °C </p>
        <p v-if="meteoList">Température min : {{ meteoList.fcst_day_0.tmin }} °C</p>
        <p v-if="meteoList">Température actuelle : {{ meteoList.current_condition.tmp }} °C</p>
        <p v-if="meteoList">Condition météo : {{ meteoList.fcst_day_0.condition }}</p>
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const pokemonList = ref([]);
const meteoList = ref(null) ;
async function getPokemon() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        try {
            const reponse = await fetch(url);
            if (!reponse.ok) {
                throw new Error(`Statut de réponse : ${reponse.status}`);
            }

            const resultat = await reponse.json();
            pokemonList.value = resultat.results;
            console.log(resultat);
        } catch (erreur) {
            console.error(erreur.message);
        }
    }

async function getMeteo() {
        const url = "https://prevision-meteo.ch/services/json/toulouse";
        try {
            const reponse = await fetch(url);
            if (!reponse.ok) {
                throw new Error(`Statut de réponse : ${reponse.status}`);
            }

            const resultat = await reponse.json();
            meteoList.value = resultat;
            console.log(resultat);
        } catch (erreur) {
            console.error(erreur.message);
        }
    }


// v-model binding (Vue 3.4+)
const model = defineModel({ default: '' });

const props = defineProps({
    text: String
});

const emit = defineEmits({
    'update:text': (value) => typeof value === 'string',
});

const now = computed(() => Date.now());

const stopWatch = watch(
    model, async (_newValue, _oldValue) => {
        // do something
    },
    {
        immediate: true
    }
);

onMounted(() => {
    getPokemon();
    getMeteo();
})


onUpdated(() => {
});

onBeforeUnmount(() => {
    stopWatch();
});

</script>

<style scoped lang="css">
</style>