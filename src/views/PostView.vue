<script setup lang="ts">
  import BlogPostComponent from "@/components/BlogPostComponent.vue";
  import ButtonSubmitComponent from '@/components/ButtonSubmitComponent.vue';
  import { ref, type Ref } from 'vue';

  let nameInput = ref();

  const count = ref(0);
  const listenClick = (): void => {
    return alert('hello world');
  }

  const onSubmited = () => {
    alert(`${nameInput.value} submitted`);
  }
</script>

<template>
  <main class="p-4 container flex flex-col text-white">
    <h1>Hello world</h1>
    <p>Total count :  {{ count }}</p>
    <div class="flex flex-row gap-4">
      <ButtonSubmitComponent
        @click="listenClick"
      />
      <BlogPostComponent
        class="bg-green-500 p-3 rounded-md"
        customClass="bg-red-400"
        @addCount="count++"
        title="Cute cat"
      />
      <BlogPostComponent
        class="bg-green-500 p-3 rounded-md"
        @addCount="count++"
        customClass="bg-yellow-400"
        title="Bad news"
      />
    </div>
    <form action="#" method="post" class="flex flex-col gap-4 w-1/4"
    v-on:submit.prevent="onSubmited"
    > 
      <h1 class="text-2xl">Register</h1>
      <input type="text" name="name" id="name" placeholder="Name" class="p-2 rounded-lg text-black"
      v-model="nameInput"
      >
      <button type="submit" class="p-3 bg-blue-500 rounded-lg w-1/2 mx-auto">Submit</button>
    </form>
  </main>
</template>
