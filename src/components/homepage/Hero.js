import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.developer}>Developpeur.</h1>
        <h1 className={styles.designer}>Designer.</h1>
        <h1 className={styles.entrepreneur}>Entrepreneur.</h1>
        <h1 className={styles.freelance}>Freelance.</h1>
      </div>
      <div className={styles.right}>
        J'accompagne les entreprises dans la transformation numérique de leur système d'information
      </div>
      {/* <FontAwesomeIcon icon={faArrowDown} /> */}
    </section>
  );
};

export default Hero;