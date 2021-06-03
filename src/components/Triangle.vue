<template>
    <div id="triangle"></div>
</template>

<script>
export default {
    name: 'triangle',
    props: {
   
    }
}
</script>

<style scoped>
 #triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
</style>