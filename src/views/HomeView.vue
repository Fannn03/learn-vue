<script setup lang="ts">
  import NavbarComponent from '@/components/home/NavbarComponent.vue';
</script>

<template>
  <div class="text-white">
    <NavbarComponent
      class="top-0 sticky"
    />
    <!-- Body -->
    <div class="md:flex md:flex-col md:gap-36 md:px-32 md:py-12">
      <!-- Header -->
      <div class="md:flex md:flex-row md:justify-center md:mt-10 font-dm-serif">
        <div class="md:flex md:flex-col md:justify-center md:w-1/2">
          <p class="md:text-xl text-gray-400">Hello!</p>
          <h1 class="md:text-5xl">I'm <span class="text-blue-400">Irfan Setiawan</span> an Backend Engineer</h1>
          <p class="text-gray-400 md:mt-6">An Junior backend engineer that passioned in <span class="text-blue-500">Node JS</span></p>
        </div>
        <img src="../assets/profile.jpeg" alt="profile"
        class="p-2 rounded-full md:w-1/3"
        >
      </div>
      <!-- End Header -->
      <!-- About -->
      <div class="md:flex md:flex-col">
        <h1 class="md:text-4xl text-center font-dm-serif text-gray-400">About</h1>
      </div>
      <!-- End About -->
    </div>
  </div>
</template>