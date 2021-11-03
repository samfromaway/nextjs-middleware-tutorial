import type { NextPage } from 'next';
import Cookies from 'js-cookie';
import styles from '../styles/Home.module.css';
import { COOKIE_NAME } from '../constants';

const Home: NextPage = () => {
  const handleClick = (id: string) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(id));
  };

  return (
    <div className={styles.container}>
      <h1>I am Interested in...</h1>
      <button onClick={() => handleClick('electronics')}>Electronics</button>
      <button onClick={() => handleClick('jewelery')}>Jewelery</button>
    </div>
  );
};

export default Home;
