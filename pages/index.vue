<template>
  <div v-if="story.content">
    <component
      :is="`blok-${dashify(component.component)}`"
      v-for="component in story.content.body"
      :key="component._uid"
      :blok="component"
    ></component>
  </div>
</template>

<script>
import dashify from 'dashify'
import Products from '~/components/Products.vue'
import Category from '~/components/Category.vue'
import Feature from '~/components/Feature.vue'

export default {
  components: {
    Products,
    Category,
    Feature,
  },
  data() {
    return {
      products: [],
      story: {},
      storeUrl: 'test',
      error: null,
    }
  },
  async mounted() {
    try {
      const response = await this.$storyapi.get('cdn/stories/home', {
        version: 'draft',
      })
      this.story = response.data.story
      console.log('story', this.story) // eslint-disable-line

      this.$storybridge.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content
          }
        } else if (!event.slugChanged) {
          window.location.reload()
        }
      })
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    dashify,
  },
}
</script>
