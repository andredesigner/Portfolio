<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <ul class="tag-list" aria-label="Tags do projeto">
    <li v-for="tag in tags" :key="tag" class="tag-item">
      {{ tag }}
    </li>
  </ul>
</template>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.tag-item {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-muted);
  font-size: var(--font-size-12);
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1;
  padding: 8px 12px;
  text-transform: uppercase;
}
</style>
