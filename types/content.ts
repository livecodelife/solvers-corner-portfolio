export interface ContentItem {
  id: number
  title: string
  subtitle?: string
  company?: string
  period?: string
  image: string
  description: string
  fullDescription: string
  technologies?: string[]
  achievements?: string[]
  externalLink: string
  duration?: string
  type: string
  category?: string
}