import './css/Header.css';
import { Link, NavLink } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdArrowBack} from 'react-icons/io'
import {AiFillHome, AiFillCaretDown} from 'react-icons/ai'
import {FaMapMarkedAlt, FaUsers} from 'react-icons/fa'
export default function Header(props){
    const showSearch = () => {
        console.log('Its working!');
    }
    // FUNCION DE LA BARRA DE BUSQUEDA
    /*const collapseNavbar = () => {
        document.getElementsByClassName('homeHeader__logo')[0].style.display = 'block';
        document.getElementsByClassName('homeHeader__searchBack')[0].style.display = 'none';
        document.getElementsByClassName('searchBox')[0].style.display = 'none';
        document.getElementsByClassName('homeHeader__search')[0].style.display = 'grid';
        document.getElementsByClassName('dropdown-content3')[0].style.display = 'none';
        document.getElementsByClassName('searchBox')[0].value = '';
    }
    // MOSTRAR ICONO Y OCULTAR BARRA
    const expandNavbar = () => {
        document.getElementsByClassName('homeHeader__logo')[0].style.display = 'none';
        document.getElementsByClassName('homeHeader__searchBack')[0].style.display = 'block';
        document.getElementsByClassName('homeHeader__search')[0].style.display = 'none';
        document.getElementsByClassName('searchBox')[0].style.display = 'block';
    }

    if (user === false ) {
        redirect('/login')
    }*/
    return(
        <div className="header">
            <div className="header-content">
                <Link className='logoContainer' to={'/'} >
                    <img src={process.env.REACT_APP_URL + "/logo.svg"} className='logo' alt="" />
                </Link>
                <div className="buttonHeader" onClick={showSearch}>
                    <BiSearchAlt />
                </div>
                <div className="headerLinks">
                    <div className="headerLink ">
                        <NavLink to={'/'} className={({isActive}) => isActive ? "active linkTop" : "linkTop"} ><AiFillHome size={20} /></NavLink>
                    </div>
                    <div className="headerLink">
                        <NavLink to={'/users'} className={({isActive}) => isActive ? "active linkTop" : "linkTop"} ><FaUsers size={20} /></NavLink>
                    </div>
                    <div className="headerLink">
                        <NavLink to={'/map'} className={({isActive}) => isActive ? "active linkTop" : "linkTop"} ><FaMapMarkedAlt size={20} /></NavLink>
                    </div>
                </div>
                <div className="buttonHeader">
                    <AiFillCaretDown />
                </div>
            </div>
        </div>
    )
}