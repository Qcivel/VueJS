<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
                <details>
                    <summary>Parent</summary>
                        <ul class="bg-base-100 rounded-t-none p-2">
                            <li><a><RouterLink to="/">Home</RouterLink></a></li>
                            <li><a><RouterLink to="/About">About</RouterLink></a></li>
                            <li><a><RouterLink to="/Contact">Contact</RouterLink></a></li>
                            <li><a><RouterLink to="/Text">Exercice</RouterLink></a></li>
                            <li><a><RouterLink to="/DataBinding">DataBinding</RouterLink></a></li>
                            <li><a><RouterLink to="/Compteur">Compteur</RouterLink></a></li>
                            <li><a><RouterLink to="/EventBinding">EventBinding</RouterLink></a></li>
                            <li><a><RouterLink to="/CompteurWatchers">CompteurWatchers</RouterLink></a></li>
                            <li><a><RouterLink to="/DynamicStyling">Dynamic Styling</RouterLink></a></li>
                            <li><a><RouterLink to="/StyleDynamique">Style Dynamique</RouterLink></a></li>
                            <li><a><RouterLink to="/VIf">Vif</RouterLink></a></li>
                            <li><a><RouterLink to="/LifeCycle">Life Cycle + Fetch API</RouterLink></a></li>
                            <li><a><RouterLink to="/MessageCard">MessageCard</RouterLink></a></li>
                            <li><a><RouterLink to="/Lesson-props">lesson-props</RouterLink></a></li>
                            <li><a><RouterLink to="/ExoProps">ExoProps</RouterLink></a></li>
                        </ul>
                </details>
            </li>
        </ul>
  </div>
</div>
</template>

<script setup lang='js'>


</script>

<style scoped lang="css">
</style>