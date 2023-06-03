export interface CarouselPropTypes {
  data: any[];
  carouselHeader: string;
  link?: string;
}

export interface CarouselHeaderPropTypes {
  carouselHeader: string;
  link?: string;
}

export interface carouselCardPropTypes {
  data: {
    id: number;
    title: string;
    overview: string;
    vote_average: string;
    poster_path: string;
    genres: {
      name: string;
    }[];
  };
}

export interface CardGridPropTypes {
  data: any[] | null | [];
}

export interface PageHeaderPropTypes {
  pageHeader: string;
}

export interface RatingPropTypes {
  rating: string;
}
