<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    count : {{ $store.state.count }}
    logyn : {{ $store.state.loginYn }}
    email : {{ $store.state.email }}
    <hr>
    <TheWelcome />
  </main>
</template>
