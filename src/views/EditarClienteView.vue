<script setup>
import { onMounted, reactive } from 'vue';
import ClienteService from '@/services/ClienteService';
import RouterLink from '@/components/UI/RouterLink.vue';
import HeadingComp from '@/components/UI/HeadingComp.vue';
import { useRouter, useRoute } from 'vue-router';
import { FormKit } from '@formkit/vue';

const router = useRouter();
const route = useRoute();
const formData = reactive({
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  empresa: '',
  puesto: '',
});

onMounted(() => {
  const { id } = route.params;
  ClienteService.obtenerCliente(id)
    .then((response) => {
      formData.nombre = response.data.nombre;
      formData.apellido = response.data.apellido;
      formData.email = response.data.email;
      formData.telefono = response.data.telefono;
      formData.empresa = response.data.empresa;
      formData.puesto = response.data.puesto;
    })
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
      <RouterLink :to="{ name: 'listado-clientes' }">Volver</RouterLink>
    </div>
    <HeadingComp>{{ titulo }}</HeadingComp>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form" submit-label="Agregar Cliente"
          incomplete-message="Por favor, complete todos los campos obligatorios." @submit="onSubmit">
          <!-- Nombre -->
          <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del cliente" v-model="formData.nombre"
            validation=" required" :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />

          <!-- Apellido -->
          <FormKit type="text" label="Apellido" name="apellido" v-model="formData.apellido"
            placeholder="Apellido del cliente" validation="required"
            :validation-messages="{ required: 'El apellido del cliente es obligatorio' }" />

          <!-- Email -->
          <FormKit type="email" label="Email" name="email" v-model="formData.email"
            placeholder="Correo electrónico del cliente" validation="required|email"
            :validation-messages="{ required: 'El correo electrónico del cliente es obligatorio', email: 'El correo electrónico no es válido' }" />

          <!-- Telefono -->
          <FormKit type="text" label="Teléfono" name="telefono" v-model="formData.telefono"
            placeholder="Teléfono del cliente: +56912345678" validation="required|*matches:/^\+569[0-9]{8}$/"
            :validation-messages="{ required: 'El teléfono del cliente es obligatorio', matches: 'El teléfono del cliente no es válido' }" />

          <!-- Empresa -->
          <FormKit type="text" label="Empresa" name="empresa" v-model="formData.empresa"
            placeholder="Nombre de la empresa del cliente" />

          <!-- Puesto -->
          <FormKit type="text" label="Puesto" name="puesto" v-model="formData.puesto"
            placeholder="Puesto del cliente en la empresa" />
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
