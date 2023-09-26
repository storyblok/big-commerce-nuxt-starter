<script setup lang="ts">
const route = useRoute()

const { slug } = route.params

const { fetchProductById } = useStore()

const { data } = await fetchProductById(slug)

/* const product = data.value.data.site.product
 */
const product = computed(() => data.value.data.site.product)
</script>

<template>
  <div class="container mx-auto h-50vh flex">
    <div class="flex flex-col justify-center w-1/2 h-full">
      <h1 class="text-4xl font-bold text-dark mb-8">
        {{ product.name }}
      </h1>
      <p class="text-gray-400">
        For only <strong>{{ product.prices.price.value }} {{ product.prices.price.currencyCode }}</strong>
      </p>
      <footer>
        <button class="text-black px-4 py-2 rounded-lg mt-8 inline-block">
          Shop now
        </button>
      </footer>
    </div>
    <div
      class="w-1/2 absolute right-0 top-0"
      :style="{ backgroundColor: '#FFB900' }"
      style="clip-path:polygon(10% 0,100% 0,100% 100%,0 100%)"
    >
      <NuxtImg
        :src="product.defaultImage.url1280wide"
      />
    </div>
  </div>
</template>