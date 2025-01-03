<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import HeadingComp from '@/components/UI/HeadingComp.vue';
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink :to="{ name: 'inicio' }">Volver</RouterLink>
        </div>
        <HeadingComp>Nuevo Cliente</HeadingComp>
    </div>
</template>