<template>
    <div id="root">
        <div>
            <h4>I'm the root component.</h4>
            <Shape name="traingle" color="pink"/>
            <Shape name="hexagone" color="green"/>
            <Shape name="star" color="yellow"/>
            <Shape name="diamond" color="silver"/>
            <Shape name="heart" color="purple"/>
            
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
    width: 100%;
    border: 3px solid black;
    background-color: rgb(135, 185, 241);
}


</style>