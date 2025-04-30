import Navbar from "@/components/Navbar";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import styles from '../styles/About.module.css';
import aboutimg from '../media/about-img.png';
import Head from "next/head";
import Homesection5 from "@/components/Homesection5";

const about = () => {
  return (
    <div className={styles.aboutoutermost}>
      <Head>
        <title>About Me - [Priyanshu]</title>
        <meta
          name="description"
          content="Learn more about me, my education, experience, and skills."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className={styles.section1}>
        <motion.h1
          className={styles.head1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className={styles.para1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I love building webpages & apps, I enjoy learning new stuff every day,
          and my main achievements are my skills which I got by building
          projects & solving bugs. I am also a programmer & I am still
          improving myself in this field, my main focus is Data Structures &
          Algorithms.<br /><br />

          I did my training related to application development at ThinkNext
          Technologies. Apart from that, I have been part of the Training &
          Placement Cell and headed various company placements at our college.
        </motion.p>
        <motion.div
          className={styles.imgcont}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={aboutimg} layout="responsive" alt="About me image" />
        </motion.div>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsleft}>
          <div className={styles.detailsinner}>
            <h1>Education</h1>
            <p><span>(2014-2018)</span> Army Public School DehuRoad Pune Maharashtra</p>
            <p><span>(2018-2020)</span> Kendriya Vidyalaya No.1 AFS Jamnagar</p>
            <p><span>(2022-2026)</span> Panjab University SSG Regional Centre Hoshiarpur (B.E in IT with 7. CGPA)</p>
          </div>
        </div>

        <div className={styles.detailsright}>
          <div className={styles.detailsinner}>
            <h1>Experience & Hackathons</h1>
            <p><span>(2023 - till date)</span> Core member of Training & Placement Cell</p>
            <p><span>(2023-2024 (June))</span> MERN Stack Developer at ThinkNext Technologies</p>
            <p><span>(2023-2024 (July-Oct))</span> Authored a Research Paper on Crop Yield Prediction System</p>
            <p><span>(2023-2024 (Nov-Dec))</span> Industrial Training in Coding Skill at Java T Point co-operated by Tpoint Tech</p>
            <p><span>(2024 - till date)</span> Hackathons in progress </p>
          </div>
        </div>

        <div className={styles.detailsleft}>
          <div className={styles.detailsinner}>
            <h1>My Skills</h1>
            <p><span>Programming in</span> C, C++, Python & Javascript</p>
            <p><span>Competitive Programming with</span> DSA in C/C++</p>
            <p><span>Web Development in</span> Node Js, Next Js, React Js, SQL, MongoDB, Sanity, Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className={styles.section1}>
        <h1 className={styles.head2}>To Know More about me</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.button}
        >
          <a
            href="https://drive.google.com/file/d/1xMNXLLlnjsl9-xvkmMqcJcnRz7poj2rc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </motion.button>
      </div>
      <Homesection5 />
    </div>
  );
};

export default about;
