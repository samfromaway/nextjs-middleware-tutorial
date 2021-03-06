// https://fakestoreapi.com/docs

import { Category } from '../types';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getArticle(category?: Category) {
  const showSpecific = category && category !== 'not-defined';

  const url = showSpecific
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`;

  await timeout(3000);
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
