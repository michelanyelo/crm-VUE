<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import HeadingComp from '@/components/UI/HeadingComp.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const clientes = ref([]);

onMounted(() => {
    axios('http://localhost:4000/clientes')
        .then(({ data }) => clientes.value = data)
        .catch((error) => {
            console.error(error);
        })
})

defineProps({
    titulo: {
        type: String,
    }
})
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink :to="{ name: 'agregar-cliente' }">Agregar Cliente</RouterLink>
        </div>
        <HeadingComp>{{ titulo }}</HeadingComp>
    </div>
</template>