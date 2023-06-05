import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { fetchProducts } from "@/lib/api";

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
