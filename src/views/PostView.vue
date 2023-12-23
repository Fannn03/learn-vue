<script setup lang="ts">
  import BlogPostComponent from "@/components/BlogPostComponent.vue";
  import { ref } from 'vue';

  const count = ref(0);
</script>

<template>
  <main class="p-4 container flex flex-col">
    <h1>Hello world</h1>
    <p>Total count :  {{ count }}</p>
    <div class="flex flex-row gap-4">
      <BlogPostComponent
        class="bg-green-500 p-3 rounded-md"
        @addCount="count++"
        title="Cute cat"
      />
      <BlogPostComponent
        class="bg-green-500 p-3 rounded-md"
        @addCount="count++"
        title="Bad news"
      />
    </div>
  </main>
</template>
