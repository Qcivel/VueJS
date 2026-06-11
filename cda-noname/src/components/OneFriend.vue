<template>
    
    <div>
        <ExoProps/>
        <div>
            <div  class="card bg-base-100 w-96 shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">Card Title</h2>
                    <p >id: {{ idProps }}  un ami : {{ saveProps ? 'En Or' : 'En Plomb' }}</p>
                    <div v-if="afficherAmi">
                        <p>name : {{ nameProps }} </p>
                        <p>phone : {{ phoneProps }} </p>
                        <p>email : {{ emailProps }}</p>
                        <p>premium : {{ premiumProps }} </p>
                    </div>
                </div>
                <button @click="premium()" class="btn btn-primary">Modif Props Premium</button>
                <button @click="afficher()" class="btn btn-secondary">Afficher utilisateur</button>
                <button @click="updatePremium" class="btn btn-secondary">Update Premium</button>
            </div>
        </div> 
    </div>
</template>

<script setup lang='js'>
import { defineEmits, ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const saveProps = ref("props.premiumProps");
const afficherAmi = ref("true");
const emit = defineEmits(["emitPremium"]);

function premium(){
    saveProps.value = !saveProps.value
}

function afficher(){
    afficherAmi.value = !afficherAmi.value;
}

function updatePremium(){
    emit("emitPremium", props.idProps);

}
// v-model binding (Vue 3.4+)
const model = defineModel({ default: '' });

const props = defineProps({
    idProps: {
        type: String,
        
    },
    nameProps: {
        type: String,
        
    },
    phoneProps: {
        type: String,
        
    },
    emailProps: {
        type: String,
        
    },
    premiumProps: {
        type: Boolean,
        
    }
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
});

onUpdated(() => {
});

onBeforeUnmount(() => {
    stopWatch();
});

</script>

<style scoped lang="css">
</style>