import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading text={'Home Page'} />
    </div>
  );
};

export default Home;