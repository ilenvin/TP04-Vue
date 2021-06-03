<template>
    <div id="hexagon"><Heart></Heart></div>
</template>

<script>
import Heart from './Heart.vue'

export default {
    name: 'hexagon',
    props: {
   
    },
    components: {
        Heart,
    }
}
</script>

<style scoped>
#hexagon {
    width: 100px;
    height: 57.735px;
    background: rgb(118, 191, 240);
    position: relative;
}
#hexagon::before {
    content: "";
    position: absolute;
    top: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 28.8675px solid red;
}
#hexagon::after {
    content: "";
    position: absolute;
    bottom: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 28.8675px solid red;
}
</style>