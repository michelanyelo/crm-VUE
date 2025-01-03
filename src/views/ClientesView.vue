<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import HeadingComp from '@/components/UI/HeadingComp.vue';
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink :to="{ name: 'agregar-cliente' }">Agregar Cliente</RouterLink>
        </div>
        <HeadingComp>Listado de Clientes</HeadingComp>
    </div>
</template>