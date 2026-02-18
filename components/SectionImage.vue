<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  caption?: string
}>()
</script>

<template>
  <figure class="section-image">
    <img :src="src" :alt="alt" loading="lazy" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.section-image {
  margin: 0 0 var(--space-32);
}

img {
  display: block;
  width: 100%;
}

figcaption {
  color: var(--color-text-muted);
  font-size: var(--font-size-14);
  line-height: var(--line-height-22);
  margin: var(--space-8) 0 0;
}
</style>
