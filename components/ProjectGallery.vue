<script setup lang="ts">
import type { GalleryImage } from '~/types/project'

const props = defineProps<{
  images: GalleryImage[]
}>()

const normalized = computed(() => props.images ?? [])
</script>

<template>
  <section class="mdx-gallery" aria-label="Galeria do projeto">
    <figure v-for="image in normalized" :key="image.src" class="mdx-gallery-item">
      <img
        :src="image.src"
        :alt="image.alt"
        class="mdx-gallery-image"
        width="684"
        height="416"
        loading="lazy"
      />
      <figcaption v-if="image.caption" class="mdx-gallery-caption">
        {{ image.caption }}
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
.mdx-gallery {
  display: grid;
  gap: var(--space-32);
}

.mdx-gallery-item {
  margin: 0;
}

.mdx-gallery-image {
  aspect-ratio: 684 / 416;
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
}

.mdx-gallery-caption {
  color: var(--color-text-muted);
  font-size: var(--font-size-14);
  line-height: var(--line-height-22);
  margin-top: var(--space-8);
}
</style>
