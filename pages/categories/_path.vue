<template>
  <div v-if="category.path">
    <Category :category="category" :error="error" />
  </div>
</template>

<script>
import { getProductsByPath } from '../../plugins/graphql-bigcommerce'
import Category from '~/components/Category.vue'

export default {
  components: {
    Category,
  },
  data() {
    return {
      category: {},
      error: null,
    }
  },
  async mounted() {
    try {
      const categoryPath = this.$route.params.path
      const res = await getProductsByPath(categoryPath)
      if (res) {
        this.category = res.site.route.node
      }
    } catch (error) {
      this.error = error
    }
  },
}
</script>
