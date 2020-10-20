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
  async asyncData(context) {
    const categoryPath = context.params.path
    const res = await getProductsByPath(categoryPath)

    return {
      category: res.site.route.node,
    }
  },
  data() {
    return {
      category: {},
      error: null,
    }
  },
}
</script>
