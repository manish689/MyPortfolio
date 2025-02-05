import './Navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo"> Manish.</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default NavBar
