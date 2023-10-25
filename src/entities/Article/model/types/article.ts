import { User } from '@/entities/User';

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
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  MEDICICNE = 'MEDICICNE',
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
