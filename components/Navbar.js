import styles from '../styles/Navbar.module.css';
import signature from '../media/signature.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const router = useRouter();

  const handleNavbarClick = () => {
    setNavActive(prevState => !prevState);
  };

  return (
    <div className={styles.navouter}>
      <div className={styles.left}>
        <Image src={signature} className={styles.sign} height={60} width={120} />
      </div>
      
      {/* Hamburger icon for mobile */}
      <div 
        className={`${styles.nav_toggler} ${navActive ? styles.navactive : ''}`} 
        onClick={handleNavbarClick}
        aria-label="Toggle navigation"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Desktop Navbar */}
      <div className={styles.right}>
        <Link href='/'>
          <button className={router.pathname === '/' ? styles.pageactive : ''}>Home</button>
        </Link>
        <Link href='/about'>
          <button className={router.pathname === '/about' ? styles.pageactive : ''}>About</button>
        </Link>
        <Link href='/projects'>
          <button className={router.pathname === '/projects' ? styles.pageactive : ''}>Projects</button>
        </Link>
        <Link href='/contact'>
          <button className={router.pathname === '/contact' ? styles.pageactive : ''}>Contact</button>
        </Link>
      </div>

      {/* Mobile Navbar (appears when nav is active) */}
      <div className={`${styles.right1} ${navActive ? styles.active : ''}`}>

          <Link href='/'>
            <button className={router.pathname === '/' ? styles.pageactive : ''}>Home</button>
          </Link>
          <Link href='/about'>
            <button className={router.pathname === '/about' ? styles.pageactive : ''}>About</button>
          </Link>
          <Link href='/projects'>
            <button className={router.pathname === '/projects' ? styles.pageactive : ''}>Projects</button>
          </Link>
          <Link href='/contact'>
            <button className={router.pathname === '/contact' ? styles.pageactive : ''}>Contact</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
