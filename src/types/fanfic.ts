export type RatingType = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
export type StatusType = 'WIP' | 'Complete';

export interface Fandom {
  id: string;
  slug: string;
  title: string;
  coverUrl: string;
  description: string;
  worksCount: number;
  updatedAt: string;
}

export interface Work {
  id: string;
  slug: string;
  fandomId: string;
  fandomTitle: string;
  title: string;
  coverUrl: string;
  summary: string;
  tags: string[];
  rating: RatingType;
  status: StatusType;
  words: number;
  isExternal: boolean;
  externalUrl?: string;
  content?: string;
  publishedAt: string;
  views: number;
}
