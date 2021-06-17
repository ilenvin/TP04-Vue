<template>
    <div id="root">
        <div>
            <h4>I'm the root component.</h4>
            <Shape name="traingle" color="blue"/>
            <Shape name="hexagone" color="yellow"/>
            <Shape name="star" color="grey"/>
            <Shape name="diamond" color="green"/>
            <Shape name="heart" color="red"/>
        </div>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import Shape from './Shape.vue'

export default {
    name: 'ei',
    data() {
        return {
            todos: [],
            task: "",
        }
    },
    components: {
        Shape,
    }
}
</script>

<style scoped>
#root {
    width: 80%;
    height: 30em;
   
    border: 3px solid black;
    background-color: rgb(135, 185, 241);
}


</style>