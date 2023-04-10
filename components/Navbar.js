import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <a>Home</a>
        <a>Posts</a>
        <a>Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;
