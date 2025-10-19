<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">Mis Actividades</h2>
      <button @click="logout" class="px-3 py-1 bg-red-500 text-white rounded">Cerrar sesión</button>
    </div>

    <ActivityForm />
    <ActivityList class="mt-6" />
  </div>
</template>

<script setup>
import ActivityForm from './ActivityForm.vue'
import ActivityList from './ActivityList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('user')
  router.push('/')
}
</script>
