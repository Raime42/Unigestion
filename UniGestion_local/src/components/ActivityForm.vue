<template>
  <form @submit.prevent="save" class="p-4 rounded shadow bg-white dark:bg-gray-800">
    <h3 class="font-semibold mb-3">Agregar actividad</h3>
    <input v-model="titulo" placeholder="Título" class="w-full p-2 border rounded mb-2" />
    <input v-model="descripcion" placeholder="Descripción" class="w-full p-2 border rounded mb-2" />
    <input v-model="fecha" type="date" class="w-full p-2 border rounded mb-2" />
    <div class="flex gap-3">
      <button class="flex-1 bg-blue-600 text-white py-2 rounded">Guardar</button>
      <button type="button" @click="clear" class="flex-1 border py-2 rounded">Limpiar</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useActivityStore } from '../store/activities'

const store = useActivityStore()
const titulo = ref('')
const descripcion = ref('')
const fecha = ref('')

function save() {
  if (!titulo.value || !fecha.value) return alert('Complete título y fecha')
  store.addActivity({ titulo: titulo.value, descripcion: descripcion.value, fecha: fecha.value })
  clear()
}

function clear() {
  titulo.value = ''
  descripcion.value = ''
  fecha.value = ''
}
</script>
