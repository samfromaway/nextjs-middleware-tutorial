import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import ProductCard from '../../components/ProductCard';
import getArticle from '../../lib/getArticle';
import { Category, Product } from '../../types';
import styles from '../../styles/Home.module.css';

export default function SG({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <h1>Static Page</h1>
      {data.map((product) => (
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
  const data: Product[] = await getArticle(params?.id as Category);

  return {
    props: {
      data,
    },
  };
}

type Paths = { params: { id: Category } }[];

export async function getStaticPaths() {
  const paths: Paths = [
    { params: { id: 'electronics' } },
    { params: { id: 'jewelery' } },
    { params: { id: 'not-defined' } },
  ];
  return {
    paths,
    fallback: 'blocking',
  };
}
