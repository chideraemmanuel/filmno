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
  item: {
    id: number;
  };
}

export interface CardGridPropTypes {
  data: any[] | null | [];
}

export interface PageHeaderPropTypes {
  pageHeader: string;
}
