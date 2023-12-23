<script setup lang="ts">
  import NavbarComponent from '@/components/home/NavbarComponent.vue';
</script>

<template>
  <div class="text-white">
    <NavbarComponent />
    <!-- Body -->
    <div class="md:flex md:flex-col md:gap-4 md:px-32 md:py-12">
      <div class="md:flex md:flex-row md:justify-center font-dm-serif">
        <div class="md:flex md:flex-col md:justify-center md:w-1/2">
          <p class="md:text-xl text-gray-400">Hello!</p>
          <h1 class="md:text-5xl">I'm <span class="text-blue-400">Irfan Setiawan</span> an Backend Engineer</h1>
          <p class="text-gray-400 md:mt-6">An Junior backend engineer that passioned in <span class="text-blue-500">Node JS</span></p>
        </div>
        <img src="../assets/profile.jpeg" alt="profile"
        class="p-2 rounded-full md:w-1/3"
        >
      </div>
      <hr>
    </div>
  </div>
</template>