import styles from '../styles/Navbar.module.css'
import signature from '../media/signature.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
const Navbar = () => {
  const [navactive,setnavactive] = useState('false');
  const router = useRouter();
  const handlenavbarclick = ()=>{
    if(navactive=='false'){
      setnavactive('true')
    }
    else{
      setnavactive('false')
    }
  }
  return (
    <div className={styles.navouter}>
        <div className={styles.left}>
            <Image src={signature} className={styles.sign} height={60} width={120} />

        </div>
        <div className={navactive=='true'?`${styles.nav_toggler} ${styles.navactive}`:styles.nav_toggler} onClick={handlenavbarclick}>
            <span></span>
          
        </div>
        <div className={styles.right}>
            <Link href='/'><button className={router.pathname=='/'?styles.pageactive:''}>Home </button></Link>
            <Link href='/about'><button className={router.pathname=='/about'?styles.pageactive:''}>About</button></Link>
            <Link href='/projects'><button className={router.pathname=='/projects'?styles.pageactive:''}>Projects</button></Link>
            <Link href='/contact'><button className={router.pathname=='/contact'?styles.pageactive:''}>Contact</button></Link>
        </div>
        {
          navactive == 'true' ?
            <div className={styles.right1}>
                <Link href='/'><button className={router.pathname=='/'?styles.pageactive:''}>Home </button></Link>
                <Link href='/about'><button className={router.pathname=='/about'?styles.pageactive:''}>About</button></Link>
                <Link href='/projects'><button className={router.pathname=='/projects'?styles.pageactive:''}>Projects</button></Link>
                <Link href='/contact'><button className={router.pathname=='/contact'?styles.pageactive:''}>Contact</button></Link>
              </div>
              :
              <></>
        }
    </div> 
  )
}

export default Navbar
