import ActiveLink from '../common/ActiveLink';

import styles from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <nav className={styles.container}>
      <ActiveLink href="/" ariaLabel="home">
        <span>home</span>
      </ActiveLink>
      <ActiveLink href="/about" ariaLabel="about">
        <span>about</span>
      </ActiveLink>
      <ActiveLink href="/skills" ariaLabel="skills">
        <span>skills</span>
      </ActiveLink>
      <ActiveLink href="/projects" ariaLabel="projects">
        <span>projects</span>
      </ActiveLink>
    </nav>
  );
};

export default Navbar;