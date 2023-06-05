import { Product } from "@/types";
import axios from "@/lib/axios";

export async function fetchProducts(q?: string) {
  let url = "/products";
  if (q) url += `?q=${q}`;

  const res = await axios.get<{ results: Product[] }>(url);
  const products = res.data.results ?? [];
  return products;
}
