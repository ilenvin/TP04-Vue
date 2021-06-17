<template>
    <Triangle v-if="name=='triangle'" :color='color'></Triangle>
    <Hexagone v-else-if="name=='hexagone'" :color='color'></Hexagone>
    <Heart v-else-if="name=='heart'" :color='color'></Heart>
    <Diamond v-else-if="name=='diamond'" :color='color'></Diamond>
    <Star v-else-if="name=='star'" :color='color'></Star>
</template>

<script>
export default {
    name: 'shape',
    props: ['name', 'color'],
}
</script>

<style scoped>

</style>