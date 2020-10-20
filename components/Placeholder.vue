<template>
  <div className="py-4 border border-red-200 bg-red-100">
    <p className="text-red-700 italic text-center">
      The component <strong>{{ blok.component }}</strong>
      has not been created yet.
    </p>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
