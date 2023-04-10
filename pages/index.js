import Tag from '../components/Heading.js';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Tag text={'Home Page'} />
    </div>
  );
};

export default Home;
