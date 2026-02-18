<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="section-text">
    <h2>{{ title }}</h2>
    <div class="section-text__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-text {
  margin: 0 0 var(--space-32);
}

h2 {
  font-size: var(--font-size-24);
  font-weight: 600;
  line-height: var(--line-height-32);
  margin: 0 0 var(--space-16);
}

.section-text__content :deep(p) {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: 0 0 var(--space-16);
}

.section-text__content :deep(p:last-child) {
  margin-bottom: 0;
}

@media (min-width: 900px) {
  h2 {
    font-size: var(--font-size-32);
    line-height: var(--line-height-40);
  }

  .section-text__content :deep(p) {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }
}
</style>
