<template>
    <div id="root">
        <div>
            <h4>I'm the root component.</h4>
        </div>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    name: 'main',
    props: {
    
    }
}
</script>

<style scoped>
#root {
    border: 1px solid black;
    color: rgb(135, 185, 241);
}
</style>