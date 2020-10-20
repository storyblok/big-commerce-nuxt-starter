<template>
  <div v-if="story.content">
    <template v-for="component in story.content.body">
      <component
        :is="`blok-${dashify(component.component)}`"
        v-if="
          availableComponents.includes(`blok-${dashify(component.component)}`)
        "
        :key="component._uid"
        :blok="component"
      ></component>
      <Placeholder v-else :key="component._uid" :blok="component" />
    </template>
  </div>
</template>

<script>
import dashify from 'dashify'
import { availableComponents } from '../plugins/components'
import Placeholder from '../components/Placeholder'

export default {
  components: {
    Placeholder,
  },
  data() {
    return {
      story: {},
      error: null,
      availableComponents,
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
