import Homesection5 from '@/components/Homesection5'
import Navbar from '@/components/Navbar'
import styles from '../styles/Homesection3.module.css'
import projectimg1 from '../media/project/project1.png'
import projectimg2 from '../media/project/project3.png'
import projectimg3 from '../media/project/project2.png'
import projectimg5 from '../media/project/project5.png'
import Card1_left from '@/components/cards/Card1_left'
import Card2_right from '@/components/cards/Card2_right'
import Head from 'next/head'
const projects = () => {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar/>
      <div className={styles.section3outer}>

                <h1>My Projects</h1>
                <Card1_left cimg={projectimg1} cname="Twitter Clone" cdescription="I built this project using MERN Stack." cvisit="https://twitter-clone-s1kc.onrender.com" ccode="https://github.com/PRIYANSHU700/twitter-clone.git"/>

                <Card2_right cimg={projectimg2} cname="Youtube Clone" cdescription="I built this project using Rapid API" cvisit="link" ccode="https://github.com/PRIYANSHU700/Youtube-clone.git"/> 

                <Card1_left cimg={projectimg3} cname="Crop Yield Prediction System" cdescription="Developed a Crop Yield Prediction System using Random Forest and XGBoost, achieving 95.51% accuracy with XGBoost. Built a Streamlit interface enabling farmers to input data and receive real-time yield predictions for informed decision-making. " cvisit="https://crop-yield-prediction-system77.streamlit.app/" ccode="https://github.com/PRIYANSHU700/Crop-Yield-Prediction-System"/> 

                <Card2_right cimg={projectimg5} cname="Game" cdescription="Work in progress" cvisit="applink" ccode="gitlink" />

                

                {/* <button className={styles.mybtn}>Show All Projects</button> */}
            </div>
        <Homesection5/>
    </div>
  )
}

export default projects
