<script setup lang="ts">
  defineEmits([
    'scrollToDivElement'
  ]);

  interface linkInterface {
    name: string,
    hash: string
  }

  const links: linkInterface[] = [
    {name: 'About', hash: '#about'},
    {name: 'Skills', hash: '#skills'},
    {name: 'Projects', hash: '#projects'},
    {name: 'Contacts', hash: '#contacts'},
  ];
</script>

<template>
  <div class="md:flex md:flex-row md:justify-between md:px-24 md:py-4 z-10 transition-colors duration-300 text-white font-dm-serif">
    <router-link to="/" class="md:text-3xl hover:text-blue-500 transition-colors duration-300">
      Portfolio
    </router-link>
    <ul class="md:flex md:flex-row md:items-center md:gap-4">
      <li v-for="link in links" class="hover:text-blue-500 transition-colors duration-300">
        <router-link @click="$emit('scrollToDivElement', link.name)" :to="{path: '/', hash: link.hash}" >{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>