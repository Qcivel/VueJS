<template>
    <div>
        <h1>WELCOME TO THE APP</h1>
        <p>Hello {{ userName }}</p>
        <p>Years old {{ age }}</p>
        <button class="btn btn-primary">Button daisyUi</button>
        <button class="btn btn-secondary">Button daisyUi</button>
        <button class="btn btn-accent">Button daisyUi</button>
        <button class="btn btn-info">Button daisyUi</button>
        <div class="bg-white p-6">
            <button class="btn btn-neutral btn-outline">Outline</button>
            <button class="btn btn-neutral btn-dash">Dash</button>
        </div>
        <button class="btn btn-dash">Default</button>
        <button class="btn btn-dash btn-primary">Primary</button>
        <button class="btn btn-dash btn-secondary">Secondary</button>
        <button class="btn btn-dash btn-accent">Accent</button>
        <button class="btn btn-dash btn-info">Info</button>
        <button class="btn btn-dash btn-success">Success</button>
        <button class="btn btn-dash btn-warning">Warning</button>
        <button class="btn btn-dash btn-error">Error</button>
    </div>
</template>

<script setup lang='js'>
import {ref} from 'vue';
const userName = ref('John Doe');
const age = 72;
</script>

<style scoped lang="css">
</style>