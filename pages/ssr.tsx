import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import getArticle from '../lib/getArticle';
import ProductCard from '../components/ProductCard';
import { Category, Product } from '../types';
import styles from '../styles/Home.module.css';
import { COOKIE_NAME } from '../constants';
import { removeQuotes } from '../utils/removeQuotes';

const SSR = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <h1>Server Side Rendered</h1>
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
};

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const cookie = removeQuotes(req.cookies?.[COOKIE_NAME]);

  const data: Product[] = await getArticle(cookie as Category);

  return {
    props: {
      data,
    },
  };
}

export default SSR;
