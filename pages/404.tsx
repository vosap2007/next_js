import { useRouter } from 'next/router.js';
import { useEffect } from 'react';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Heading text={'Error - 404'} />
    </div>
  );
};

export default Error;
