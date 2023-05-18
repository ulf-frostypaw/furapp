import { Link } from '@inertiajs/react';
//import {BiSearchAlt} from 'react-icons/bi'
export default function Header(){
    return(
        <nav>
            <div className="container">
                <h2 className="logo">
                    <Link href={'/'}>FurrApp</Link>
                </h2>
                <div className="search-bar">
                    {/*<BiSearchAlt />*/}
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