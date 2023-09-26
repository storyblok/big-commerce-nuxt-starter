        
<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="inblok in blok.body"
      :key="inblok._uid"
      :blok="inblok"
    />
  </div>
</template>