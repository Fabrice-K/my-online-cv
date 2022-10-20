
import styles from './Footer.module.scss';

const Footer = (props) => {
  return (
    <footer className={styles.container}>
      <div>Bordeaux</div>
      <div>
        <span>3 rue Léon Jouhaux</span>
        <span>33800 Bordeaux</span>
      </div>
    </footer>
  );
};

export default Footer;