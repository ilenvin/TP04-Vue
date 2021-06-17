<template>
    <Triangle v-if="name=='triangle'" :color='color'></Triangle>
    <Hexagone v-else-if="name=='hexagone'" :color='color'></Hexagone>
    <Heart v-else-if="name=='heart'" :color='color'></Heart>
    <Diamond v-else-if="name=='diamond'" :color='color'></Diamond>
    <Star v-else-if="name=='star'" :color='color'></Star>
</template>

<script>
import Triangle from './Triangle.vue'
import Diamond from './Diamond.vue'
import Heart from './Heart.vue'
import Star from './Star.vue'
import Hexagone from './Hexagone.vue'

export default {
    name: 'shape',
    props: ['name', 'color'],
    components: {
        Triangle,
        Diamond,
        Heart,
        Star,
        Hexagone,
    }
}
</script>

<style scoped>

</style>