import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import ProductCard from '../../components/ProductCard';
import getArticle from '../../lib/getArticle';
import { Product } from '../../types';
import styles from '../../styles/Home.module.css';

export default function SG({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <h1>Static Page</h1>
      {data.map((product: any) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const data: Product[] = await getArticle(params?.id);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
