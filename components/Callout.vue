<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <aside class="mdx-callout">
    <h3 class="mdx-callout-title">{{ title }}</h3>
    <div class="mdx-callout-content">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.mdx-callout {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-24);
}

.mdx-callout-title {
  font-size: var(--font-size-20);
  line-height: var(--line-height-28);
  margin: 0 0 var(--space-8);
}

.mdx-callout-content :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
