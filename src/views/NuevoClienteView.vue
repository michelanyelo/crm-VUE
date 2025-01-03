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
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form">
                    <!-- Nombre -->
                    <FormKit type="text" label="Nombre" placeholder="Nombre del cliente" validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />

                    <!-- Apellido -->
                    <FormKit type="text" label="Apellido" placeholder="Apellido del cliente" validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }" />

                    <!-- Email -->
                    <FormKit type="email" label="Email" placeholder="Correo electrónico del cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El correo electrónico del cliente es obligatorio', email: 'El correo electrónico no es válido' }" />

                    <!-- Telefono -->
                    <FormKit type="text" label="Teléfono" placeholder="Teléfono del cliente: +569 12345678"
                        validation="required"
                        :validation-messages="{ required: 'El teléfono del cliente es obligatorio' }" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
    max-width: 100%;
}
</style>