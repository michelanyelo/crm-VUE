<script setup>
import { FormKit } from '@formkit/vue';
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

        <div class="mx-auto mt-10 bg-white shadow">
            <FormKit type="form">
                <FormKit type="text" label="Nombre" placeholder="Nombre del cliente"
                    help="Coloca el nombre del cliente que deseas registrar" validation="required"
                    :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />
            </FormKit>
        </div>
    </div>
</template>