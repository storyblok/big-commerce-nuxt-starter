<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <div class="relative md:h-400px overflow-hidden flex justify-end flex-wrap-reverse">
    <div class="container px-4 md:px-0 mx-auto h-full ">
      <div class="flex flex-col justify-center w-full md:w-1/2 h-full">
        <h1 class="text-4xl font-bold text-dark mb-8">
          {{ blok.headline }}
        </h1>
        <p class="text-gray-400">
          {{ blok.subheadline }}
        </p>
        <footer>
          <button class="text-black px-4 py-2 rounded-lg mt-8 inline-block">
            Shop now
          </button>
        </footer>
      </div>
    </div>
    <div
      class="w-2/3 md:w-1/2 md:absolute right-0 top-0 mb-8"
      style="clip-path:polygon(10% 0,100% 0,100% 100%,0 100%)"
    >
      <NuxtImg
        :src="blok.image.filename"
      />
    </div>
  </div>
</template>