import { Product } from "@/types";
import axios from "@/lib/axios";

export async function fetchProducts() {
  const res = await axios.get<{ results: Product[] }>("/products");
  const products = res.data.results;
  return products;
}
