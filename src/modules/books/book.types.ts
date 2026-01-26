export interface BookRequest {
  title: string;
  author: string;
  description: string;
  rate: number | string;
  coverImage: string;
  isFavorite: boolean;
}

export interface BookResponse extends BookRequest {
  id: string;
}
