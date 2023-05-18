//import {BiHomeAlt, BiPalette, BiCog, BiHash} from 'react-icons/bi'
//import {FiUsers, FiBell, FiBookmark} from 'react-icons/fi'
//import { HiOutlineMapPin } from 'react-icons/hi2' 
import { Link } from '@inertiajs/react';
const Sidebar = () =>{
    return(
        <div className="left mobile-hidden">
            <Link href={'/user/ulf-frostypaw'} className="profile">
                <div className="profile-picture">
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
                <div className="handle">
                    <h4>Ulf FrostyPaw</h4>
                    <p className="text-muted">@ulf-frostypaw</p>
                </div>
            </Link>
            <div className="sidebar">
                <Link href={'/'} className={ "menu-item" }>
                    {/*<BiHomeAlt size={'1.3rem'} className='uil' />*/} <h3>Inicio</h3>
                </Link>
                <Link href={'/users'} className={ "menu-item" }>
                    {/*<FiUsers size={'1.3rem'} className='uil' />*/} <h3>Miembros</h3>
                </Link>
                <Link href={'/trending'} className={"menu-item" }>
                    {/*<BiHash size={'1.3rem'} className='uil' />*/} <h3>Tendencias</h3>
                </Link>
                <Link href={'/map'} className={ "menu-item" }>
                    {/*<HiOutlineMapPin size={'1.3rem'} className='uil' />*/} <h3>Mapa</h3>
                </Link>
                <Link href={'/c/notifications'} className={ "menu-item" }>
                    {/*<FiBell size={'1.3rem'} className='uil' />*/} <h3>Notificaciones</h3>
                    {/* NOTIFICATIONS POP-UP*/}
                </Link>
                <Link href={'/c/bookmarks'} className={ "menu-item" }>
                    {/*<FiBookmark size={'1.3rem'} className='uil' />*/} <h3>Guardados</h3>
                </Link>
                <Link href={'/c/settings'} className={ "menu-item" }>
                    {/*<BiCog size={'1.3rem'} className='uil' />*/} <h3>Configuración</h3>
                </Link>
                {/* MODAL PARA CAMBIAR LOS ESTILOS DE LA  PAGINA Y GUARDAR EN localStorage*/}
                {/*<NavLink to={'/theme'} className="menu-item">
                    <BiPalette size={'1.3rem'} className='uil' /> <h3>Temas</h3>
                </NavLink>*/}
            </div>
            <label htmlFor="create-post" className='btn btn-primary'>Publicar algo</label>
        </div>
    );
}

export default Sidebar;