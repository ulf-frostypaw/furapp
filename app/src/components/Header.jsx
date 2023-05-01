import './css/Header.css';
import { Link, NavLink } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdArrowBack} from 'react-icons/io'
import {AiFillHome, AiFillCaretDown} from 'react-icons/ai'
import {FaMapMarkedAlt, FaUsers} from 'react-icons/fa'
export default function Header(){
    return(
        <nav>
            <div className="container">
                <h2 className="logo">
                    <Link to={'/'}>FurrApp</Link>
                </h2>
                <div className="search-bar">
                    <BiSearchAlt />
                    <input type="search" name="" placeholder="Buscar personas aquí." id="" />
                </div>
                <div className="create">
                    <label className="btn btn-primary" htmlFor="create-post">Crear</label>
                    <div className="profile-picture">
                        <img src="https://via.placeholder.com/150" alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}