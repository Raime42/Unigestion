<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">Mis Actividades</h2>
      <div class="flex items-center gap-3">
        <button @click="logout" class="px-3 py-1 bg-red-600 text-white rounded">Cerrar sesión</button>
      </div>
    </div>

    <ActivityForm :activity="activityToEdit" @saved="clearEditMode" />
    <ActivityList class="mt-6" @edit-activity="setActivityToEdit" />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ActivityForm from './ActivityForm.vue'
import ActivityList from './ActivityList.vue'
import { useRouter } from 'vue-router'

const activityToEdit = ref(null)

function setActivityToEdit(activity) {
  activityToEdit.value = activity
}

function clearEditMode() {
  activityToEdit.value = null
}

const router = useRouter()

function logout(){
  localStorage.removeItem('user')
  router.push('/')
}
</script>