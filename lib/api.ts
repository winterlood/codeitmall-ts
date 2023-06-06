import { Product, SizeReview } from "@/types";
import axios from "@/lib/axios";

export async function fetchProducts(q?: string) {
  let url = "/products";
  if (q) url += `?q=${q}`;

  const res = await axios.get<{ results: Product[] }>(url);
  const products = res.data.results ?? [];
  return products;
}

export async function fetchProduct(productId: string) {
  const res = await axios.get<Product>(
    `/products/${productId}`
  );
  const product = res.data;
  return product;
}

export async function fetchSizeReviews(productId: string) {
  const res = await axios.get<{ results: SizeReview[] }>(
    `/size_reviews/?product_id=${productId}`
  );
  const sizeReviews = res.data.results ?? [];
  return sizeReviews;
}
