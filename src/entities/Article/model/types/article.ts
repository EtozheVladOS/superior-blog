import { User } from '@/entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED_AT = 'createdAt',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE'
}

export interface ArticleCommonBlock {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleCommonBlock {
  type: ArticleBlockType.TEXT,
  paragrafs: string[],
  title?: string,
}

export interface ArticleCodeBlock extends ArticleCommonBlock {
  type: ArticleBlockType.CODE,
  code: string,
}

export interface ArticleImageBlock extends ArticleCommonBlock {
  type: ArticleBlockType.IMAGE,
  src: string,
  title?: string,
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  MEDICINE = 'MEDICINE',
  GAMES = 'GAMES'
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  creationDate: string;
  type: ArticleType[],
  blocks: ArticleBlock[],
  user: User,
}

export enum ArticleView {
  BIG = 'big',
  SMALL = 'small',
}
