<template>
    <div id="star"></div>
</template>

<script>
export default {
    name: 'star',
    props: {
   
    }
}
</script>

<style scoped>
    #star {
        margin: 50px 0;
        position: relative;
        display: block;
        color: rgb(237, 240, 94);
        width: 0px;
        height: 0px;
        border-right: 100px solid transparent;
        border-bottom: 70px solid rgb(237, 240, 94);
        border-left: 100px solid transparent;
        transform: rotate(35deg);
    }
    #star:before {
        border-bottom: 80px solid rgb(237, 240, 94);
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -45px;
        left: -65px;
        display: block;
        content: '';
        transform: rotate(-35deg);
    }
    #star:after {
        position: absolute;
        display: block;
        color: rgb(170, 175, 175);
        top: 3px;
        left: -105px;
        width: 0px;
        height: 0px;
        border-right: 100px solid transparent;
        border-bottom: 70px solid red;
        border-left: 100px solid transparent;
        transform: rotate(-70deg);
        content: '';
    }
</style>