import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../../styles/NavItem.module.css';

export function NavItem({href, children}) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      {children}
    </Link>
  );
}
