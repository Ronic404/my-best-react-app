import { User } from '../../../../entities/User'

export type ArticleBlockType = 'CODE' | 'IMAGE' | 'TEXT'
export type ArticleSortField = 'views' | 'title' | 'created'

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE'
  code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE'
  src: string
  title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT'
  title?: string
  paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export type ArticleType = 'ALL' | 'IT' | 'SCIENCE' | 'ECONOMICS'
export type ArticleViewType = 'big' | 'small'

export interface Article {
  id: string
  title: string
  user: User
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
