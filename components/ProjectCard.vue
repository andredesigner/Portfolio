<script setup lang="ts">
import type { ProjectFrontmatter } from '~/types/project'

const props = defineProps<{
  project: ProjectFrontmatter
}>()

const projectLink = computed(() => `/projects/${props.project.slug}`)
</script>

<template>
  <article class="project-card">
    <img
        class="project-cover"
        :src="project.cover"
        :alt="`Capa do projeto ${project.title}`"
        width="684"
        height="416"
        loading="lazy"
      />
    <div class="project-body">
      <p class="project-meta">{{ project.title }}</p>
      <h3 class="project-title">{{ project.summary }} <NuxtLink :to="projectLink" class=" link-accent" :aria-label="`Ver projeto ${project.title}`">Veja o projeto</NuxtLink></h3>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  width: 100%;
}

.project-cover-link {
  display: block;
}

.project-cover {
  aspect-ratio: 684 / 416;
  background: #d9d9d9;
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  padding: var(--space-8) 0 var(--space-16);
}

.project-meta {
  color: var(--color-text);
  font-size: var(--font-size-14);
  font-weight: 700;
  line-height: var(--line-height-22);
  margin: 0;
}

.project-title {
  font-size: var(--font-size-16);
  font-weight: 400;
  line-height: var(--line-height-24);
  margin: 0;
}

@media (min-width: 900px) {
  .project-meta {
    font-size: var(--font-size-24);
    line-height: var(--line-height-32);;
  }

  .project-title {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }

  .project-link {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }
}
</style>
