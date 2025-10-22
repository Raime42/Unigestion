<template>
  <form @submit.prevent="save" class="p-4 rounded shadow bg-gray-800">
    <h3 class="font-semibold mb-3">{{ id ? 'Editar actividad' : 'Agregar actividad' }} actividad</h3>
    <input v-model="titulo" placeholder="Título" class="w-full p-2 bg-gray-900 border border-gray-700 rounded mb-2" />
    <input v-model="descripcion" placeholder="Descripción" class="w-full p-2 bg-gray-900 border border-gray-700 rounded mb-2" />
    <input v-model="fecha" type="date" class="w-full p-2 bg-gray-900 border border-gray-700 rounded mb-2" />
    <div class="flex gap-3">

      <button class="flex-1 bg-blue-600 text-white py-2 rounded">
        {{ id ? 'Actualizar' : 'Guardar' }}
      </button>
      <button type="button" @click="handleClear" class="flex-1 border border-gray-700 py-2 rounded">Limpiar</button>
    </div>
    <p v-if="error" class="text-red-400 mt-2">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useActivityStore } from '../store/activities'

const props = defineProps({
  activity: Object 
})

const emit = defineEmits(['saved'])

const id = ref(null)
const store = useActivityStore()
const titulo = ref('')
const descripcion = ref('')
const fecha = ref('')
const error = ref('')

watchEffect(() => {
  if(props.activity){
    id.value = props.activity.id
    titulo.value = props.activity.titulo
    descripcion.value = props.activity.descripcion
    fecha.value = props.activity.fecha
  }else{
    clear()
  }
})

function save(){
  if(!titulo.value || !fecha.value) return alert('Complete título y fecha')

  if(id.value){
    store.updateActivity({
       id: id.value,
       titulo: titulo.value,
       descripcion: descripcion.value,
       fecha: fecha.value
    })
  }else{
    store.addActivity({
      titulo: titulo.value,
      descripcion: descripcion.value,
      fecha: fecha.value
    })
  }
  emit('saved')
  clear()
}

  function clear() {
    id.value = null;
     titulo.value = '';
     descripcion.value = '';
     fecha.value = '';
     error.value = '';
  }

function handleClear() {
  clear();
  emit('saved');
}
</script>
