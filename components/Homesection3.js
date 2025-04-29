import styles from '../styles/Homesection3.module.css'
import projectimg1 from '../media/project/project1.png'
import projectimg2 from '../media/project/project2.png'
import projectimg3 from '../media/project/project3.png'

import Card1_left from './cards/Card1_left'
import Card2_right from './cards/Card2_right'
import Link from 'next/link'
const Homesection3 = () => {
  return (
    <div className={styles.section3outer}>
        <h1>My Top Projects</h1>
        <Card1_left cimg={projectimg1} cname="Twitter Clone" cdescription="I built this project using MERN Stack." cvisit="https://twitter-clone-priyanshu.vercel.app/" ccode="https://github.com/PRIYANSHU700/twitter-clone.git"/>

         <Card2_right cimg={projectimg3} cname="Youtube Clone" cdescription="I built this project using Rapid API" cvisit="https://youtube-clone77.vercel.app/" ccode="https://github.com/PRIYANSHU700/YoutubeClone77"/> 

         <Card1_left cimg={projectimg2} cname="Crop Yield Prediction System" cdescription="Developed a Crop Yield Prediction System using Random Forest and XGBoost, achieving 95.51% accuracy with XGBoost. Built a Streamlit interface enabling farmers to input data and receive real-time yield predictions for informed decision-making. " cvisit="https://crop-yield-prediction-system77.streamlit.app/" ccode="https://github.com/PRIYANSHU700/Crop-Yield-Prediction-System"/>

        <Link href="/projects">
        <button className={styles.mybtn}>Show All Projects</button>
        </Link>
    </div>
  )
}

export default Homesection3
