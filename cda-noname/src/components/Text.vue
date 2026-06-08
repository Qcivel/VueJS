<template>
    <div>
        <h2>EXERCICE  : TEXT INTERPOLATION</h2>
        <table>
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Valeur</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>isOnline</td>
                    <td>{{ isOnline }}</td>
                </tr>
                <tr>
                    <td>unLivre</td>
                    <td>{{ unLivre }}</td>
                </tr>
                <tr>
                    <td>unNombre</td>
                    <td>{{ unNombre }}</td>
                </tr>
                <tr>
                    <td>unTableau (complet)</td>
                    <td>{{ unTableau }}</td>
                </tr>
                <tr>
                    <td>unTableau[0] (premier élément)</td>
                    <td>{{ unTableau[0] }}</td>
                </tr>
                <tr>
                    <td>unObjet (complet)</td>
                    <td>{{ unObjet }}</td>
                </tr>
                <tr>
                    <td>unObjet.name</td>
                    <td>{{ unObjet.name }}</td>
                </tr>
                <tr>
                    <td>fonctionTest()</td>
                    <td>{{ fonctionTest() }}</td>
                </tr>
                <tr>
                    <td>ternaire('Cool')</td>
                    <td>{{ ternaire('Cool') }}</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <section>
            <h2>Exercice Text Interpolation + Function</h2>
            <p>{{ randomFunction() }}</p>
        </section>
    </div>
</template>

<script setup lang='js'>
import {ref} from 'vue';

const unLivre = ref('Les mémoires de Steven Seagal');
const isOnline = true;
const unNombre = 8888;
const unTableau = ['du texte', 99];
const unObjet = {'name':"Cool", 'tel': '060503030'};
const fonctionTest = () =>{
    return 'Hello World';
}
const ternaire = (cool)=> {
    return cool==="Cool" ? "Cool" : "Pas Cool" ;
}
const TextHtml= '<h1>Du Html</h1>';

//Exercice Text Interpolation + Function

const randomFunction = () =>{
    const randomNumber = Math.random();
    if (randomNumber > 0.5){
        return 'Ok';
    }else{
        return 'Erreur';
    }
}
</script>

<style scoped lang="css">
</style>