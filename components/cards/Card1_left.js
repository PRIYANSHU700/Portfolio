import styles from '../cards/Card1_left.module.css'
import Image from "next/legacy/image"
const Card1_left = (props) => {
  return (
    <div className={styles.card_outer}>
        <div className={styles.left}>

            <Image src={props.cimg} layout='responsive' style={{borderRadius:'10px'}}></Image>
        </div>
        
        <div className={styles.right}>
            <div className={styles.text}>
                <h2>{props.cname}</h2>
                <p>{props.cdescription}</p>

            </div>
            <div>
                <button><a href={props.cvisit}>Visit</a></button>
                <button><a href={props.ccode}>Source Code</a></button>
            </div>
 
        </div>

    </div>
  )
}

export default Card1_left