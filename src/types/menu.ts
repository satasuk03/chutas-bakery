export type BadgeType = "popular" | "new" | "hot" | "recommended";

export interface PriceVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  nameTh: string;
  nameEn: string;
  descriptionTh: string;
  category: string;
  image: string;
  images?: string[];
  rotation: number;
  badge?: BadgeType;
  price?: number;
  unit?: string;
  variants?: PriceVariant[];
  flavors?: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface MenuData {
  categories: MenuCategory[];
  items: MenuItem[];
}
