import Image from 'next/image';

import Navbar from '../Navbar';

import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.container}>
      <Image src="/logo512.png" width={30} height={30} />
      <Navbar />
    </header>
  );
};

export default Header;