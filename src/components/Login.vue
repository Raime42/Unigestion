<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
    <h2 class="text-2xl font-semibold mb-4">Iniciar sesión</h2>
    <input v-model="email" placeholder="Correo electrónico" class="w-full p-2 border rounded mb-3" />
    <input v-model="password" type="password" placeholder="Contraseña" class="w-full p-2 border rounded mb-3" />
    <button @click="login" class="w-full bg-blue-600 text-white py-2 rounded">Entrar</button>
    <router-link to="/register" class="block text-center mt-3 text-blue-500">Crear cuenta</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function login() {
  if (email.value && password.value) {
    localStorage.setItem('user', JSON.stringify({ email: email.value }))
    router.push('/dashboard')
  } else {
    alert('Complete todos los campos')
  }
}
</script>
