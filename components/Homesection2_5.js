import styles from '../styles/Homesection2_5.module.css';
import { FaSchool, FaUniversity, FaCode, FaUserGraduate, FaLaptopCode, FaRocket } from 'react-icons/fa';

const timelineData = [
  {
    period: "2014-2018",
    description: "Army Public School DehuRoad Pune Maharashtra",
    icon: <FaSchool />,
  },
  {
    period: "2018-2020",
    description: "Kendriya Vidyalaya No.1 AFS Jamnagar",
    icon: <FaSchool />,
  },
  {
    period: "2022 - till date",
    description: "B.E Information Technology from Panjab University",
    icon: <FaUniversity />,
  },
  {
    period: "2023 - till date",
    description: "Member of Training & Placement Cell.",
    icon: <FaUserGraduate />,
  },
  {
    period: "2023 - 2024",
    description:
      "Worked as MERN Stack Developer at ThinkNext Technologies. Industrial Training in Coding Skills at Java T Point co-operated by Tpoint Tech.",
    icon: <FaLaptopCode />,
  },
  {
    period: "2023 - till date",
    description: "Learning new technology and building projects with it.",
    icon: <FaRocket />,
  },
];

const TimelineItem = ({ period, description, icon, isLast }) => (
  <div className={`${styles.timelineItem} ${styles.fadeIn}`}>
    <div className={styles.iconWrapper}>{icon}</div>
    <p className={styles.timelinePeriod}>{period}</p>
    <div className={styles.timelineConnector}>
      <button className={styles.circle}></button>
      {!isLast && <div className={styles.hrline}></div>}
      <button className={styles.circle}></button>
    </div>
    <p className={styles.timelineDescription}>{description}</p>
    {!isLast && <div className={styles.vrline}></div>}
  </div>
);

const Homesection2_5 = () => {
  return (
    <div className={styles.section2_5outer}>
      <h1 className={styles.title}>My Experience & Education</h1>
      <div className={styles.section2_5inner}>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            period={item.period}
            description={item.description}
            icon={item.icon}
            isLast={index === timelineData.length - 1}
          />
        ))}
        <p className={styles.finalMessage}>
          "It's great to have these experiences & I am willing to learn more in the future."
        </p>
      </div>
    </div>
  );
};

export default Homesection2_5;
