<script setup lang="ts">
  import BlogPostComponent from "@/components/BlogPostComponent.vue";
  import { ref } from 'vue';

  const count = ref(0);
</script>

<template>
  <main>
    <h1>Hello world</h1>
    <p>Total count :  {{ count }}</p>
    <BlogPostComponent
      @add-count="count++"
      title="My title"
    />
  </main>
</template>
