<script setup lang="ts">
const props = defineProps({
  blok: Object,
})

const items = computed(() => props.blok['bigcommerce_products'].items)

const { products, fetchProducts } = useStore()

onMounted(async () => {
  await fetchProducts(items.value.map(item => item.id))
})
</script>

<template>
  <section class="py-16 md:py-32 px-4 md:px-0 flex items-center">
    <div class="container mx-auto ">
      <h2 class="font-bold text-4xl mb-16 text-gray-700">
        {{ blok.headline }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
        <div
          v-for="(product, $index) in products"
          :key="product.id"
        >
          <NuxtImg
            class="rounded-lg"
            :style="{ backgroundColor: $index % 2 === 0 ? '#00B3B0' : '#FFB900' }"
            :src="product.thumbnail"
            :alt="product.name"
          />
          <div class="mt-8">
            <NuxtLink
              :to="`/products/${product.id}`"
              class="font-bold text-lg mb-4 text-gray-700"
            >
              {{ product.name }}
            </NuxtLink>
            <p>{{ product.description }}</p>
            <div class="mt-8 flex justify-between flex-wrap">
              <span class="text-sm font-bold flex items-center text-gray-500 p-1.5 rounded">{{ product.price.value }} {{ product.price.currencyCode }}</span>
              <button
                class="bg-gray-800 text-white flex justify-center items-center w-10 h-10 rounded"
              >
                <i class="i-carbon-shopping-cart-plus inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>