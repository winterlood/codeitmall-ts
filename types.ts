export interface Product {
  brand: string;
  createdAt: number;
  id: number;
  imgUrl: string;
  likeCount: number;
  name: string;
  point: number;
  price: string;
  productCode: string;
  salePrice: number;
  starRating: number;
  starRatingCount: number;
  updatedAt: number;
  englishName: string;
}

export type Theme = "ligth" | "dark";

export interface SizeReview {
  createdAt: number;
  updatedAt: number;
  id: number;
  sex: "male" | "female";
  height: number;
  size: "S" | "M" | "L" | "XL";
  fit: "small" | "good" | "big";
  productId: number;
}
