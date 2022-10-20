import Image from 'next/image';

import Navbar from '../navbar/Navbar';
import { HEADER_LINKS } from '../../models/links';

import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={`${styles.container} p-2`}>
      <Image src="/logo512.png" width={30} height={30} />
      <Navbar links={HEADER_LINKS} />
    </header>
  );
};

export default Header;