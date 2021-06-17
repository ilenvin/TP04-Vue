<template>
    <div id="diamond" :style="{'--main-color':color}">
    </div>
</template>

<script>
export default {
    name: 'diamond',
    props: ['color'],
}
</script>

<style scoped>
:root {
    --main-color: rgb(28, 185, 247);
}
#diamond {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 70px solid var(--main-color);
    position: relative;
    top: -50px;
}
#diamond:after {
    content: '';
    position: absolute;
    left: -50px;
    top: 70px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top: 70px solid var(--main-color);
}
  
</style>