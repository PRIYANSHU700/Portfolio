import styles from '../styles/Homesection4.module.css';
import Link from 'next/link';

const Homesection4 = () => {
  return (
    <div className={styles.section4outermost}>
      <div className={styles.left}>
        <p>
          If you are looking for a web/app developer, data analyst, or any assistance regarding your projects, feel free to contact me at 
          <Link href="/contact">
            <span className={styles.email}>&nbsp; kpriyanshu200@gmail.com</span>
          </Link>
        </p>
      </div>
      <div className={styles.right}>
        <h1>
          Let's<br />
          Work<br />
          Together
        </h1>
      </div>
    </div>
  );
};

export default Homesection4;
