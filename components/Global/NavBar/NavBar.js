import styles from '../../../styles/NavBar.module.css';


const NavBar = () => {
  return (
      <div className={styles.nav}>
        <div className={styles.navComp}>
          <p>pixel-perfect</p>
          <ul>
            <li>Photos</li>
            <li>Illustrations</li>
            <li>Vectors</li>
            <li>Videos</li>
            <li>Music</li>
            <li>Sound Effects</li>
          </ul>
        </div>
        <div className={styles.navComp}>
          <ul>
            <li>Explore</li>
            <li>Log in</li>
            <li>Join</li>
            <button>Upload</button>
          </ul>
         
        </div>
    </div>
  );
};

export default NavBar;