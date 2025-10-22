<template>
  <div>
    <div v-if="store.activities.length === 0" class="text-gray-400">No hay actividades registradas.</div>
    <div v-else class="space-y-3">
      <div v-for="act in store.activities" :key="act.id" class="p-4 rounded shadow bg-gray-800 flex justify-between items-center">
        <div>
          <h4 class="font-semibold">{{ act.titulo }}</h4>
          <p class="text-sm text-gray-400">{{ act.descripcion }}</p>
          <p class="text-sm text-gray-500">📅 {{ act.fecha }}</p> 
        </div>
             
        <div class="flex-shrink-0">
          <button @click="emit('edit-activity', act)" class="text-blue-500 mr-3">
            Editar
          </button>
          <button @click="del(act.id)" class="text-red-500">
            Eliminar
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useActivityStore } from '../store/activities'
const store = useActivityStore()
const emit = defineEmits(['edit-activity'])

function del(id){
  if(confirm('¿Eliminar actividad?')) store.deleteActivity(id)
}
</script>