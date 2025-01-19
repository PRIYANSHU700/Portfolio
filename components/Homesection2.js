import styles from '../styles/Homesection2.module.css';

const Homesection2 = () => {
  return (
    <div className={styles.section2outer}>
      {/* Left Section */}
      <div className={styles.left}>
        <h1 className={styles.head1}>My Skills</h1>
        <h1 className={styles.head2}>
          Web App Development, Data Science & Programming
        </h1>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <p className={styles.description}>
          I love building new webpages with innovative functionalities. I have 
          experience with React.js, Next.js, Sanity, SQL, MySQL, RapidAPI, and MongoDB. 
          I have completed a training of 4 weeks as an Application Developer at ThinkNext Technologies and 
          served as a member of Training & Placement Cell in our college.<br />
          Always eager to collaborate, innovate, and solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default Homesection2;
