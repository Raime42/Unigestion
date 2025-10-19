<template>
  <div :class="dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'" class="min-h-screen font-sans">
    <header :class="dark ? 'bg-gray-800' : 'bg-blue-600'" class="p-4">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">UniGestión</h1>
        <button @click="toggleTheme" class="px-3 py-1 rounded bg-white/10 hover:bg-white/20">
          {{ dark ? 'Modo claro' : 'Modo oscuro' }}
        </button>
      </div>
    </header>

    <main class="max-w-4xl mx-auto p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dark = ref(true)
function toggleTheme() { dark.value = !dark.value }
</script>
