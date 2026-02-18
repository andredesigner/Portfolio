<script setup lang="ts">
import type { ProjectDocument } from '~/types/project'

const config = useRuntimeConfig()

const { data: projects } = await useAsyncData('home-projects', () =>
  queryContent('/projects').sort({ order: 1 }).find()
)

const projectList = computed<ProjectDocument[]>(() =>
  (projects.value ?? []) as unknown as ProjectDocument[]
)

const featuredProject = computed(() => projectList.value[0] ?? null)
const otherProjects = computed(() => projectList.value.slice(1))

useSeoMeta({
  title: 'André Oliveira | UX Designer',
  description:
    'Portfólio de André Oliveira com projetos de design estratégico para produtos digitais.',
  ogTitle: 'André Oliveira | UX Designer',
  ogDescription:
    'Portfólio de André Oliveira com projetos de design estratégico para produtos digitais.',
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl }]
})

const processSteps = [
  { title: 'Diagnóstico', text: 'Investigo o problema, o contexto e os objetivos do negócio. Alinho expectativas e identifico oportunidades reais de impacto.' },
  { title: 'Estratégia', text: 'Defino hipóteses, fluxos e prioridades. Transformo descobertas em direção clara e critérios de decisão.' },
  { title: 'Design', text: 'Crio soluções focadas em usabilidade, clareza e consistência. Prototipo para reduzir ambiguidades.' },
  { title: 'Validação', text: 'Testo com usuários, analiso dados e itero com base em evidências. Otimizo antes de escalar.' }
]
</script>

<template>
  <div class="page-shell">
    <header class="section home-hero" aria-label="Introdução">
      <div class="home-hero-logo">
        <SiteLogo />
      </div>

      <div class="home-hero-copy">
        <div>
          <p class="home-kicker">
            UX Designer na
            <a class="link-accent" href="https://www.onebox.one" target="_blank" rel="noreferrer">
              Onebox
            </a>
          </p>
          <h1 class="home-title">Design estratégico para produtos digitais que precisam escalar.</h1>
        </div>
        <p class="home-summary">
          Transformo problemas complexos em experiências simples, intuitivas e orientadas a resultado.
          <a
            class="home-cv link-accent"
            href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&e=3&st=kdu9nou9&dl=0"
            target="_blank"
            rel="noreferrer"
          >
            Veja meu currículo
          </a>
        </p>
        
      </div>
    </header>

    <main>
      <section class="two-col-section section projects-section" aria-labelledby="projects-heading">
        <div>
          <h2 id="projects-heading" class="left-col-title mobile-secondary-title">Mais recente</h2>
        </div>

        <div class="projects-grid">
          <ProjectCard v-if="featuredProject" :key="featuredProject.slug" :project="featuredProject" />
        </div>
      </section>

      <section
        v-if="otherProjects.length"
        class="two-col-section section projects-section"
        aria-labelledby="other-projects-heading"
      >
        <div>
          <h2 id="other-projects-heading" class="left-col-title mobile-secondary-title">Mais projetos</h2>
        </div>

        <div class="grid">
          <ProjectCard v-for="project in otherProjects" :key="project.slug" :project="project" />
        </div>
      </section>

      <section class="two-col-section section" aria-labelledby="process-heading">
        <div>
          <h2 id="process-heading" class="left-col-title mobile-secondary-title">
            Processo claro. <br> Decisões fundamentadas.
          </h2>
        </div>

        <div class="grid">
          <article v-for="step in processSteps" :key="step.title" class="process-item">
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </section>

      <section class="two-col-section section border-none" aria-labelledby="about-heading">
        <div>
          <h2 id="about-heading" class="left-col-title mobile-secondary-title">Sobre</h2>
        </div>

        <div class="about-right">          
          <p>Designer com mais de 10 anos de experiência atuando em ambientes de agência, startups e empresas de tecnologia.</p>
          <p>Trabalho na criação de produtos digitais, websites e sistemas, participando do processo do discovery à entrega e colaborando com times multidisciplinares.</p>
          <p>Tenho formação em design gráfico, com especialização em UX, o que me permite tomar decisões consistentes entre experiência, identidade visual e interface.</p>
        </div>
      </section>
    </main>
    <footer>
      <SiteFooter class="section" />
    </footer>
  </div>
</template>

<style scoped>
.home-hero {
  display: grid;
  gap: var(--space-24);
  padding: var(--space-32) 0;
}

.home-hero-copy {
  display: grid;
}

.home-hero-copy .link-accent{
  margin-top: var(--font-size-16);
}

.home-kicker {
  font-size: var(--font-size-12);
  font-weight: 700;
  line-height: var(--line-height-20);
  margin: 0;
  text-transform: uppercase;
}

.home-kicker a{
  font-size: var(--font-size-12);
}

.home-title {
  font-size: var(--font-size-32);
  font-weight: 600;
  line-height: var(--line-height-40);
  margin: 0;
}

.home-summary {
  font-size: var(--font-size-16);
  font-weight: 500;
  line-height: var(--line-height-24);
  margin-top: var(--line-height-24);
  margin-bottom: 0;
}

.projects-grid {
  display: grid;
  gap: var(--space-32);
}

.projects-section {
  gap: var(--space-32);
}

.mobile-secondary-title {
  font-size: var(--font-size-18);
  line-height: var(--line-height-24);
}

.grid {
  display: grid;
  gap: var(--space-64) var(--space-24);
  grid-template-columns: repeat(2, minmax(0, 1fr));
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


.home-about {
  padding-bottom: 0;
}

.about-right p {
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  margin: 0 0 var(--space-32);
}

@media (max-width: 899px) {
  .home-summary .link-accent{
    display: block;
  }
}

@media (min-width: 900px) {
  .home-hero {
    grid-template-columns: 330px minmax(0, 1fr);
    padding: var(--space-96) 0 var(--space-64);
  }

  .home-kicker {
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);
  }

  .home-kicker a{
    font-size: var(--font-size-16);
  }

  .home-title {
    font-size: var(--font-size-48);
    letter-spacing: -0.008em;
    line-height: var(--line-height-62);
  }

  .home-summary,
  .home-cv {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }

  .projects-grid {
    gap: var(--space-64);
  }

  .mobile-secondary-title {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }

  .process-item{
    width: 73%;
  }

  .process-item p,
  .about-right p {
    font-size: var(--font-size-20);
    line-height: var(--line-height-28);
  }

  .process-item h3 {
    font-size: var(--font-size-32);
    line-height: var(--line-height-40);
  }

}
</style>
