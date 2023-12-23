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
  
  const emit = defineEmits([
    'add-count'
  ]);
</script>

<template>
  <main class="flex flex-col gap-4">
    Blog Post : {{ props.title }}
    <button @click="emit('add-count')" class="bg-blue-500 rounded-md p-2">count me</button>
  </main>
</template>