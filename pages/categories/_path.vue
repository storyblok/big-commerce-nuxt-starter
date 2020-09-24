<template>
  <div v-if="category.path">
    <Category :category="category" :error="error" />
  </div>
</template>

<script>
import { getProductsByCategory } from '../../plugins/bigCommerceApi'
import Category from '~/components/Category.vue'

export default {
  components: {
    Category,
  },
  data() {
    return {
      products: [],
      category: {},
      error: null,
    }
  },
  async mounted() {
    try {
      const categoryPath = this.$route.params.path
      const res = await this.getProductsByCategory(`/${categoryPath}/`)
      if (res) {
        this.category = res.site.route.node
      }
    } catch (error) {
      this.error = error
    }
  },
  methods: { getProductsByCategory },
}
</script>
