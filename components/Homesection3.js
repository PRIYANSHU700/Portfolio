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

         <Card2_right cimg={projectimg2} cname="Youtube Clone" cdescription="I built this project using Rapid API" cvisit="link" ccode="https://github.com/PRIYANSHU700/Youtube-clone.git"/> 

        <Card1_left cimg={projectimg2} cname="Project 3" cdescription="work in progress " cvisit="applink" ccode="gitlink"/> 

        <Link href="/projects">
        <button className={styles.mybtn}>Show All Projects</button>
        </Link>
    </div>
  )
}

export default Homesection3
