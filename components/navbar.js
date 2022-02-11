import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
    
    <Link href ='/'><a>Home</a></Link>
    <Link href='/about'><a>About Me</a></Link>
    <Link href='/portfolio'><a>Portfolio</a></Link>
    <Link href='/projects'><a>My Projects</a></Link>
    </nav>
  )
}


export default Navbar