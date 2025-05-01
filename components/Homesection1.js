import styles from '../styles/Homesection1.module.css';
import mainimg from '../media/photo.png';
import Image from 'next/legacy/image';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Homesection1 = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.animationWrapper}>
        {/* Animated Bubbles */}
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
      </div>

      {/* Left Section */}
      <div className={styles.left}>
        <h2 className={styles.head2}>Hello There,</h2>
        <h1 className={styles.head1}>
          <span>My name is Priyanshu</span>
        </h1>
        <p className={styles.ptag}>
          A 21-year-old tech enthusiast, I am a MERN Stack Developer and B.Tech IT 3rd year student with a deep interest in Web Development and Data Science.
        </p>
        
        <button onClick={() => window.location.href = '/about'} className={styles.ctaButton}>  Know More <span className={styles.pointer}>👈</span></button>

        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/priyanshu-478953257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/PRIYANSHU700" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/priyanshu_singh_77/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <Image
          src={mainimg}
          layout="intrinsic"
          width={500}
          height={500}
          alt="A portrait of Priyanshu"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default Homesection1;
