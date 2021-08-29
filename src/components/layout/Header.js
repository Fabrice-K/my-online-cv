import Image from 'next/image';

import Navbar from '../Navbar';

import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.container}>
      This is the header
      <Image src="/logo512.png" width={50} height={50} />
      <Navbar />
    </header>
  );
};

export default Header;