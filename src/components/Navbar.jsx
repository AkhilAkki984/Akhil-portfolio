import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import logo from "../assets/akhil.png"
const Navbar = () =>{
    return(
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center w-20 h-20 mx-8">
            <a href="/" aria-label="Home">
            <img src={logo}/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-8 text-2xl">
            <a href="https://www.linkedin.com/in/kantepalliakhil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin/>
            </a>
            <a href="https://github.com/AkhilAkki984"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub/>
            </a>
            <a href="https://Instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <FaInstagram/>
            </a>
        </div>
    </nav>
 )
}
export default Navbar;



