export interface ProjectFrontmatter {
  order: number
  title: string
  slug: string
  summary: string
  year: number
  context: string
  cover: string
  tags: string[]
  ogImage?: string
}

export interface ProjectDocument extends ProjectFrontmatter {
  _path: string
  _id: string
  _draft?: boolean
}

export interface MetricItem {
  label: string
  value: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}
