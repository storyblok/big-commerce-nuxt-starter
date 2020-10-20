<template>
  <div v-editable="blok" class="max-w-screen my-20 container mx-auto">
    <div v-if="error">{{ error }}</div>
    <template v-else>
      <h1
        class="text-lg text-center uppercase tracking-wider font-semibold text-gray-800 md:text-xl"
      >
        {{ blok.headline }}
      </h1>
      <Category
        v-for="category in blok.items.items"
        :key="category.id"
        :category="category"
        :error="error"
      />
    </template>
  </div>
</template>

<script>
import strShorten from 'str_shorten'
import Category from './Category'

export default {
  components: { Category },
  props: {
    products: Array,
    error: Object,
    blok: Object,
  },
  data() {
    return {
      fullProducts: [],
    }
  },
  methods: {
    strShorten,
  },
}
</script>
