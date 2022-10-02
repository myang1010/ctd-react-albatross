import { Link } from 'react-router-dom';
import style from '../styling/Navbar.module.css';

const Navbar = ()=>{
    return (
    <nav>
      <Link to="/about" className={style.bg}>About</Link>
      <span className={style.bg}>|</span> 
      <Link to="/" className={style.bg}>To Do List</Link>
    </nav>)};

export default Navbar;