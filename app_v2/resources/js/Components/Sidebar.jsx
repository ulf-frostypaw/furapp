import {BiHomeAlt, BiPalette, BiCog, BiHash} from 'react-icons/bi'
import {FiUsers, FiBell, FiBookmark} from 'react-icons/fi'
import { HiOutlineMapPin } from 'react-icons/hi2' 
import { Link, usePage } from '@inertiajs/react';
const Sidebar = () =>{
    const { url } = usePage()
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
                <Link href={'/'} className={url === '/' ? 'menu-item active' :"menu-item" }>
                    <BiHomeAlt size={'1.3rem'} className='uil' /> <h3>Inicio</h3>
                </Link>
                <Link href={'/users'} className={url === '/users' ? 'menu-item active' : "menu-item" }>
                    <FiUsers size={'1.3rem'} className='uil' /> <h3>Miembros</h3>
                </Link>
                <Link href={'/trending'} className={url === '/trending' ? 'menu-item active' : "menu-item" }>
                    <BiHash size={'1.3rem'} className='uil' /> <h3>Tendencias</h3>
                </Link>
                <Link href={'/map'} className={url === '/map' ? 'menu-item active' : "menu-item" }>
                    <HiOutlineMapPin size={'1.3rem'} className='uil' /> <h3>Mapa</h3>
                </Link>
                <Link href={'/c/notifications'} className={url === '/c/notifications' ? 'menu-item active' : "menu-item" }>
                    <FiBell size={'1.3rem'} className='uil' /> <h3>Notificaciones</h3>
                    {/* NOTIFICATIONS POP-UP*/}
                </Link>
                <Link href={'/c/bookmarks'} className={url === '/c/bookmarks' ? 'menu-item active' : "menu-item" }>
                    <FiBookmark size={'1.3rem'} className='uil' /> <h3>Guardados</h3>
                </Link>
                <Link href={'/settings/'} className={url === '/c/settings' ? 'menu-item active' : "menu-item" }>
                    <BiCog size={'1.3rem'} className='uil' /> <h3>Configuración</h3>
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