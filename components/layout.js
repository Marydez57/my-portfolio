
import Footer from './footer'
import Navbar from './navbar'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div>
     
    <Navbar />
    <div className={styles.img}>
      <div className={styles.brand}>
        <h1 className={styles.text}>Mary Chukwuma</h1>
        <h2 className={styles.text}>Software engineer</h2>
        <Link href='/about'><a>About Me</a></Link>
        <Link href='/portfolio'><a>Portfolio</a></Link>
        <Link href='/projects'><a>Projects</a></Link>
      </div>
      </div>
    {/*<Image src ='/portfolio_background.jpg' width={1820} height ={760} />*/}
        {children}
    <Footer />
    </div>
  )
}

export default Layout
