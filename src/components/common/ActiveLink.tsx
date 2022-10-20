import { useRouter } from 'next/router';

import styles from './ActiveLink.module.scss';

function ActiveLink({ children, href, ariaLabel }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={styles.container}>
      <a
        href={href}
        onClick={handleClick}
        aria-label={ariaLabel}
        className={router.asPath === href ? styles.active : ''}>
        {children}
      </a>
    </div>
  );
}

export default ActiveLink;
