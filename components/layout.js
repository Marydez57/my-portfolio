
import Footer from './footer'
import Navbar from './navbar'
import Image from 'next/image'

const Layout = ({children}) => {
  return (
    <div>
     
    <Navbar />
    <div></div>
    <Image src ='/portfolio_background.jpg' width={1820} height ={760} />
        {children}
    <Footer />
    </div>
  )
}

export default Layout
