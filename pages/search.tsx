import Head from "next/head";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { fetchProducts } from "@/lib/api";

export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  const q = context.query["q"];
  const stringifiedQuery = Array.isArray(q)
    ? q.join(" ")
    : q;

  const products = await fetchProducts(stringifiedQuery);

  return {
    props: {
      products,
      q: stringifiedQuery || "",
    },
  };
}

export default function Search({
  q,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색
        결과
      </h2>
      <ProductList
        className={styles.productList}
        products={products}
      />
    </>
  );
}
