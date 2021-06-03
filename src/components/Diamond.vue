<template>
    <div id="diamond"></div>
</template>

<script>
export default {
    name: 'diamond',
    props: {
   
    }
}
</script>

<style scoped>
    #diamond {
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-bottom-color: rgb(170, 175, 175);
        position: relative;
        top: -50px;
    }
    #diamond:after {
        content: '';
        position: absolute;
        left: -50px;
        top: 50px;
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-top-color: red;
    }
  
</style>