export interface ICartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: "Small" | "Medium" | "Large";
  potColor: string;
}

export type ICartCatalog = ICartItem[];
