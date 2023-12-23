<script setup lang="ts">
  import { onMounted, ref, type Ref } from 'vue';

  let isScrolled: Ref<boolean> = ref(false);
  const onScroll = (event: Event) => {
    if(window.scrollY > 100) isScrolled.value = true;
    else isScrolled.value = false;
  }
  
  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  })
</script>

<template>
  <div class="md:flex md:flex-row md:justify-between md:px-24 md:py-4 transition-colors duration-300 text-white font-dm-serif"
  :class="{'bg-gray-900': isScrolled}"
  >
    <router-link to="/" class="md:text-3xl hover:text-blue-500 transition-colors duration-300">
      Portfolio
    </router-link>
    <ul class="md:flex md:flex-row md:items-center md:gap-4">
      <li class="hover:text-blue-500 transition-colors duration-300">
        <router-link to="#">Home</router-link>
      </li>
      <li class="hover:text-blue-500 transition-colors duration-300">
        <router-link to="#">About</router-link>
      </li>
      <li class="hover:text-blue-500 transition-colors duration-300">
        <router-link to="#">Skills</router-link>
      </li>
      <li class="hover:text-blue-500 transition-colors duration-300">
        <router-link to="#">Projects</router-link>
      </li>
      <li class="hover:text-blue-500 transition-colors duration-300">
        <router-link to="#">Contacts</router-link>
      </li>
    </ul>
  </div>
</template>