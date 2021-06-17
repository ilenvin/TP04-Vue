<template>
    <div id="triangle" :style="{'--main-color':color}"></div>
</template>

<script>
export default {
    name: 'triangle',
    props: ['color'],
}
</script>

<style scoped>
:root {
    --main-color: rgb(245, 35, 122);
}

 #triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid var(--main-color);
}
</style>