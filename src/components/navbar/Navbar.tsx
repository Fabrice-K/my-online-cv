import ActiveLink from '../common/ActiveLink';
import { linksType } from '../../models/links';

import styles from './Navbar.module.scss';


type NavbarProps = {
  links: linksType[]
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className={styles.container}>
      {
        links.map(({ id, label, href }) => (<ActiveLink key={id} href={href} ariaLabel={label}>
          <span>{label}</span>
        </ActiveLink>))
      }
    </nav>
  )
};

export default Navbar;