<template>
    <div id="root">
        <div>
            <h4>I'm the root component.</h4>
            <Triangle></Triangle>
        </div>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import Triangle from './Triangle.vue'

export default {
    name: 'ei',
    props: {
        
    },
    components: {
        Triangle,
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