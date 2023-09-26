<script setup lang="ts">
const props = defineProps({ blok: Object })

const product = computed(() => props.blok['bigcommerce_product'].items[0])
const bgColor = computed(() => props.blok['bg_color'].color)
</script>

<template>
  <section>
    <div class="container py-16 md:py-32 px-4 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <NuxtImg
        v-if="product"
        class="rounded-lg"
        :style="{ backgroundColor: bgColor }"
        :src="product.image"
        :alt="blok.name"
      />
      <div>
        <h2 class="font-bold text-4xl mb-8 text-gray-700">
          {{ blok.headline }}
        </h2>
        <h3 class="font-bold text-2xl mb-4 text-gray-700">
          {{ product.name }}
        </h3>
        <p>{{ blok.description }}</p>
        <div class="mt-8">
          <button
            class="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            Add to cart 
          </button>
        </div>
      </div>
    </div>
  </section>
</template>