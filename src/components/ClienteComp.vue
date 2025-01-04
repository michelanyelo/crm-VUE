<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  cliente: {
    type: Object,
    required: true,
  }
})

const nombreCliente = computed(() => `${props.cliente.nombre} ${props.cliente.apellido}`)

</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900"> {{ nombreCliente }} </p>
      <p class="text-gray-500"> {{ cliente.email }} </p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold"> {{ cliente.empresa }} </p>
      <p class="text-gray-600"> {{ cliente.puesto }} </p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <span v-if="cliente.activo"
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Activo
      </span>
      <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Inactivo
      </span>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
      <RouterLink :to="{ name: 'listado-clientes' }" class="text-indigo-600 hover:text-indigo-900 mr-4">
        Editar</RouterLink>
      <button class="text-red-600 hover:text-red-900">Eliminar</button>
    </td>
  </tr>
</template>

<style scoped></style>
