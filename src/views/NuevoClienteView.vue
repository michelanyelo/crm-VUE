<script setup>
import axios from 'axios';
import { FormKit } from '@formkit/vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import HeadingComp from '@/components/UI/HeadingComp.vue';
import { useRouter } from 'vue-router';

defineProps({
    titulo: {
        type: String,
    }
})

const router = useRouter();

const onSubmit = (data) => {
    axios.post('http://localhost:4000/clientes', data)
        .then(() => {
            alert('Cliente agregado correctamente');
            router.push({ name: 'inicio' });
        })
        .catch((error) => {
            console.error(error);
            alert('Ocurrió un error al agregar el cliente');
        })
}
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink :to="{ name: 'inicio' }">Volver</RouterLink>
        </div>
        <HeadingComp>{{ titulo }}</HeadingComp>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar Cliente"
                    incomplete-message="Por favor, complete todos los campos obligatorios." @submit="onSubmit">
                    <!-- Nombre -->
                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />

                    <!-- Apellido -->
                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }" />

                    <!-- Email -->
                    <FormKit type="email" label="Email" name="email" placeholder="Correo electrónico del cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El correo electrónico del cliente es obligatorio', email: 'El correo electrónico no es válido' }" />

                    <!-- Telefono -->
                    <FormKit type="text" label="Teléfono" name="telefono"
                        placeholder="Teléfono del cliente: +56912345678"
                        validation="required|*matches:/^\+569[0-9]{8}$/"
                        :validation-messages="{ required: 'El teléfono del cliente es obligatorio', matches: 'El teléfono del cliente no es válido' }" />

                    <!-- Empresa -->
                    <FormKit type="text" label="Empresa" name="empresa"
                        placeholder="Nombre de la empresa del cliente" />

                    <!-- Puesto -->
                    <FormKit type="text" label="Puesto" name="puesto" placeholder="Puesto del cliente en la empresa" />
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