<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import HeadingComp from '@/components/UI/HeadingComp.vue';

defineProps({
    titulo: {
        type: String,
    }
})
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink :to="{ name: 'inicio' }">Volver</RouterLink>
        </div>
        <HeadingComp>{{ titulo }}</HeadingComp>
    </div>
</template>