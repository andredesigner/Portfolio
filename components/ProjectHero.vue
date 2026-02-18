<script setup lang="ts">
import type { ProjectFrontmatter } from '~/types/project'

defineProps<{
  project: ProjectFrontmatter
}>()
</script>

<template>
  <section class="section project-hero border-none">
    <div class="left-col">
      <SiteLogo />
    </div>

    <div class="right-col">
      <p class="project-kicker">{{ project.title }}</p>
      <h1 class="project-heading">{{ project.summary }}</h1>
    </div>
  </section>
</template>

<style scoped>
.project-hero {
  border-bottom: 1px solid var(--color-border);
  display: grid;
  gap: var(--space-24);
  padding: var(--space-32) 0;
}

/* .left-col {
  align-items: center;
  display: flex;
} */

.project-kicker {
  font-size: var(--font-size-24);
  font-weight: 500;
  line-height: var(--line-height-32);
  margin: 0;
  text-transform: uppercase;
}

.project-heading {
  font-size: var(--font-size-32);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: var(--line-height-40);
  margin: var(--space-16) 0 0;
  max-width: 100%;
}

@media (min-width: 900px) {
  .project-hero {
    grid-template-columns: 330px minmax(0, 1fr);
    padding: var(--space-96) 0 var(--space-64);
  }

  .project-kicker {
    font-size: var(--font-size-32);
    line-height: var(--line-height-40);
  }

  .project-heading {
    font-size: var(--font-size-56);
    line-height: 1.14;
    max-width: 780px;
  }
}
</style>
