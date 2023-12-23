<script setup lang="ts">
  interface BlogInterface {
    title: string,
    author?: string,
    category: string[] | [],
    description: string
  }

  const props = withDefaults(defineProps<BlogInterface>(), {
    title: 'Untitled',
    category: () => [],
    description: 'adadwa'
  })
</script>

<template>
  <main>
    Blog Post : {{ props.title }}
    <button @click="$emit('add-count')">count me</button>
  </main>
</template>