import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.developer}>Developer.</div>
        <div className={styles.designer}>Designer.</div>
        <div className={styles.programmer}>Programmer.</div>
        <div className={styles.freelance}>Freelance.</div>
      </section>
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
};

export default Hero;