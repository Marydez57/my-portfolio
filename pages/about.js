import styles from '../styles/about.module.css'
import Image from 'next/image'
const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
    <h1 className={styles.title}>
    <span className={styles.myPortfolio}>My Portfolio</span>  Hi, I'm Mary
    </h1>
    <p className={styles.name}> I'm a Software developer with the passion to create and design the best websites utilizing my creativity.
    designing and developing software is an adventure that I seek to satisfy my intellectural quest for wisdom why providing solutions to industrial problems.</p>
    <button className={styles.btn}>READ MORE</button>
    </div>
    <div className={styles.card}>
        <Image src='/about_me.jpg'
         width={100}
         height ={80}
         layout ='fill'
         objectFit='cover'
         alt ='' />
    </div>
    </div>
  )
}

export default About
