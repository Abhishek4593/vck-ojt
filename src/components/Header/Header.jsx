import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div>
            <header className='header1'>
                 <Link to="/home"> Vivekanand College </Link>

                <nav>
                   
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/admission" className="nav-item2">Apply Now</Link>
                </nav>
            </header>

        </div>
    )
}

export default Header;