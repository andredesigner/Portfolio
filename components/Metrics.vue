<script setup lang="ts">
import type { MetricItem } from '~/types/project'

defineProps<{
  items: MetricItem[]
}>()
</script>

<template>
  <section class="mdx-metrics" aria-label="Métricas do projeto">
    <article v-for="item in items" :key="item.label" class="metric-item">
      <p class="metric-value">{{ item.value }}</p>
      <h3 class="metric-label">{{ item.label }}</h3>
    </article>
  </section>
</template>

<style scoped>
.mdx-metrics {
  display: grid;
  gap: var(--space-16);
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.metric-item {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--space-16);
}

.metric-value {
  font-size: var(--font-size-32);
  font-weight: 700;
  line-height: 1;
  margin: 0 0 var(--space-8);
}

.metric-label {
  font-size: var(--font-size-14);
  font-weight: 500;
  line-height: var(--line-height-22);
  margin: 0;
}
</style>
