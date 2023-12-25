<script setup lang="ts">
  import NavbarComponent from '@/components/home/NavbarComponent.vue';
  import { onMounted, ref, type Ref } from 'vue';

  let isScrolled: Ref<boolean> = ref(false);

  const onScroll = () => {
    if(window.scrollY > 100) isScrolled.value = true;
    else isScrolled.value = false;
  }

  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // div id section must be same with linkInterface<name>
  const scrollToDivElement = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({behavior: 'smooth'});
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  })
</script>

<template>
  <div class="text-white">
    <NavbarComponent
      @scroll-to-div-element="scrollToDivElement"
      class="top-0 sticky"
      :class="{'bg-gray-900': isScrolled}"
    />
    <!-- Body -->
    <div class="md:flex md:flex-col md:gap-36 md:px-32 md:py-12">
      <!-- Header -->
      <div class="md:flex md:flex-row md:justify-center md:mt-10 font-dm-serif">
        <div class="md:flex md:flex-col md:justify-center md:w-1/2">
          <p class="md:text-xl text-gray-400">Hello!</p>
          <h1 id="headerText" class="md:text-5xl">I'm <span class="text-blue-400">Irfan Setiawan</span> an Backend Engineer</h1>
          <!-- <h1 id="textHeader" class="md:text-5xl"></h1> -->
          <p class="text-gray-400 md:mt-6">An Junior backend engineer that passioned in <span class="text-blue-500">Node JS</span></p>
        </div>
        <img src="../assets/profile.jpeg" alt="profile"
        class="md:w-1/3 rounded-full transition delay-100 hover:scale-105"
        >
      </div>
      <!-- End Header -->
      <!-- About -->
      <div id="about" class="md:flex md:flex-col">
        <h1 class="md:text-4xl text-center font-dm-serif text-gray-400">About</h1>
      </div>
      <!-- End About -->
    </div>
    <!-- End Body -->
  </div>

    <!-- Button Up -->
    <div class="bottom-5 right-5 transition ease-in-out duration-300"
    :class="[isScrolled ? 'fixed' : 'hidden']"
    >
      <button @click="backToTop" class="p-3 bg-blue-500 text-white rounded-md transition duration-300 hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </div>
    <!-- End Button Up -->
</template>