import { useRouter } from 'next/router';

function ActiveLink({ children, href, ariaLabel }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} aria-label={ariaLabel} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
