import styles from '../styles/Homesection5.module.css'
import Image from 'next/image'
import signature from '../media/signature.png'

const Homesection5 = () => {
  return (
    <div className={styles.section5outermost}>
        <div className={styles.left}>
        <Image src={signature} className={styles.sign} height={60} width={120} /> 
        </div>
        <div className={styles.right}>
            <h1>
                Built from scratch by me
            </h1>
        </div>
    </div>
  )
}

export default Homesection5