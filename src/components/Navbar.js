import ActiveLink from './common/ActiveLink';

const Navbar = (props) => {
  return (
    <nav>
      <ActiveLink href="/" ariaLabel="home">
        <span className="me-3">home</span>
      </ActiveLink>
      <ActiveLink href="/about" ariaLabel="about">
        <span className="me-3">about</span>
      </ActiveLink>
      <ActiveLink href="/skills" ariaLabel="skills">
        <span className="me-3">skills</span>
      </ActiveLink>
      <ActiveLink href="/projects" ariaLabel="projects">
        <span className="me-3">projects</span>
      </ActiveLink>
    </nav>
  );
};

export default Navbar;