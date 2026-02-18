<script setup lang="ts">
import type { ProjectDocument } from '~/types/project'

const route = useRoute()
const config = useRuntimeConfig()

const slug = computed(() => route.params.slug as string)

const { data: projectDoc } = await useAsyncData(`project-${slug.value}`, () =>
  queryContent('/projects').where({ slug: slug.value }).findOne()
)

const project = computed(() => projectDoc.value as ProjectDocument | null)

const { data: allProjects } = await useAsyncData('projects-nav', () =>
  queryContent('/projects').sort({ order: 1 }).find()
)

const navigationProjects = computed<ProjectDocument[]>(() =>
  ((allProjects.value ?? []) as unknown as ProjectDocument[]).filter((item) => item.slug !== slug.value)
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projeto não encontrado'
  })
}

const canonicalUrl = computed(() => `${config.public.siteUrl}/projects/${slug.value}`)

useSeoMeta({
  title: () => `${project.value?.title} | André Oliveira`,
  description: () => project.value?.summary,
  ogTitle: () => `${project.value?.title} | André Oliveira`,
  ogDescription: () => project.value?.summary,
  ogType: 'article',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => project.value?.ogImage || project.value?.cover,
  robots: 'index, follow'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ]
})

</script>

<template>
  <div v-if="project" class="page-shell">
    <header>
      <ProjectHero :project="project" />
    </header>

    <main>
      <section class="two-col-section" aria-labelledby="project-cover-heading">
        <div />
        <img
          :src="project.cover"
          :alt="`Capa principal do projeto ${project.title}`"
          class="project-main-image"
          width="803"
          height="489"
          fetchpriority="high"
        />
      </section>

      <section class="two-col-section section" aria-labelledby="project-about-heading">
        <div>
          <h2 id="project-about-heading" class="left-col-title">Contexto</h2>
        </div>
        <div class="project-about-copy">
          <p>{{ project.context }}</p>
          <!-- <p><strong>Função:</strong> {{ project.role }}</p> -->
          <TagList :tags="project.tags" />
        </div>
      </section>

      <section class="section project-content" aria-labelledby="project-content-heading">
        <h2 id="project-content-heading" class="sr-only">Conteúdo detalhado do projeto</h2>
        <div class="project-content-layout">
          <div class="project-content-left" />
          <article class="mdx-rich-content">
            <ContentRenderer v-if="project" :value="project" />
          </article>
        </div>
      </section>

      <section class="two-col-section section border-none" aria-labelledby="next-projects-heading">
        <div>
          <h2 id="next-projects-heading" class="left-col-title">Navegue</h2>
        </div>

        <div class="navigate-grid">
          <article class="navigate-item">
            <NuxtLink class="navigate-link" to="/">
              <h3>Início</h3>
            </NuxtLink>
          </article>

          <article v-for="item in navigationProjects" :key="item.slug" class="navigate-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
            <NuxtLink class="link-accent" :to="`/projects/${item.slug}`">Veja o projeto</NuxtLink>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <SiteFooter class="project-footer" />
    </footer>
  </div>
</template>

<style scoped>
.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.project-main-image {
  aspect-ratio: 803 / 489;
  background: #d9d9d9;
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
}

.project-about-copy p {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: 0 0 var(--space-16);
}

.project-content {
  padding: var(--space-64) 0;
}

.project-content-layout {
  display: grid;
  gap: var(--space-24);
}

.navigate-grid {
  display: grid;
  gap: var(--space-64) var(--space-24);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.navigate-item h3 {
  font-size: var(--font-size-18);
  line-height: var(--line-height-26);
  margin: 0 0 var(--space-16);
}

.navigate-item p {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: 0;
}

.navigate-link {
  color: inherit;
  display: block;
  text-decoration: none;
}

.process-item h3 {
  font-size: var(--font-size-18);
  line-height: var(--line-height-26);
  margin: 0 0 var(--space-8);
}

.process-item p {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: 0;
}

.next-project-copy {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: var(--space-16) 0 0;
}

.project-footer {
  border-bottom: 0;
}

.link-accent{
  margin-top: var(--space-24);
  display: inline-block;
}

@media (min-width: 900px) {
  .process-item p,
  .next-project-copy{
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }

  .navigate-item p {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }

  .process-item h3,
  .navigate-item h3{
    font-size: var(--font-size-32);
    line-height: var(--line-height-40);
  }

  .project-content-layout {
    grid-template-columns: 330px minmax(0, 1fr);
  }

  .navigate-grid {
    gap: var(--space-128) var(--space-24);
  }

}
</style>
