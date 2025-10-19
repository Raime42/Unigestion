<template>
  <div>
    <div v-if="store.activities.length === 0" class="text-gray-500">No hay actividades.</div>
    <div v-else class="space-y-3">
      <div v-for="act in store.activities" :key="act.id" class="p-4 rounded shadow bg-white dark:bg-gray-700 flex justify-between items-center">
        <div>
          <h4 class="font-semibold">{{ act.titulo }}</h4>
          <p class="text-sm text-gray-500">{{ act.descripcion }}</p>
          <p class="text-sm text-gray-400">📅 {{ act.fecha }}</p>
        </div>
        <button @click="del(act.id)" class="text-red-500">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActivityStore } from '../store/activities'
const store = useActivityStore()
function del(id) {
  if (confirm('¿Eliminar actividad?')) store.deleteActivity(id)
}
</script>
