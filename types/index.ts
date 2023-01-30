interface Detail {
  title: string;
  isShow?: boolean;
}

export interface DetailLink extends Detail {
  isNew?: boolean;
  url: string;
}

export interface DetailsType extends Detail {
  contents: Array<string | DetailsType | DetailLink>;
  isOpen?: boolean;
}
