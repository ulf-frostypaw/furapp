import Layout from "@/Layouts/Layout";
import Sidebar from '@/Components/Sidebar';
//import {AiOutlineEllipsis, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
//import {BiCommentDetail} from 'react-icons/bi'
//import {BsBookmarkFill} from 'react-icons/bs'
//import {FaShare} from 'react-icons/fa'

export default function Home(){
    return(
        <>
            <Layout titlePage={'Inicio'}>
                <div className="container-grid">
                    <Sidebar />
                    <div className="middle">
                        <form action="#" className="create-post">
                            <div className="profile-picture">
                                <img src="https://via.placeholder.com/150" alt="" />
                            </div>
                            <input type="text" name="" placeholder='Escribe...' id="create-post" />
                            <button className="btn btn-primary">Publicar</button>
                        </form>
                        <div className="feeds">
                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-picture photo">
                                            <img src="https://via.placeholder.com/150" alt="" />
                                        </div>
                                        <div className="ingo">
                                            <h3>Ulf FrostyPaw</h3>
                                            <small className="muted-text">Hace 15 minutos</small>
                                        </div>
                                    </div>
                                    <span className="options">
                                        {/*<AiOutlineEllipsis /> */}
                                    </span>
                                </div>
                                <div className="caption">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod vero, sed odit dignissimos, fugiat asperiores, labore exercitationem in aspernatur laboriosam et! Voluptatum odio ratione, amet deleniti ea explicabo rem adipisci! <span className="hashtag">#FursuitFriday</span></p>
                                    </div>
                                    <div className="photo">
                                        <img src="https://via.placeholder.com/230" alt="FOTO DE {USERNAME}" />
                                    </div>
                                    <div className="action-buttons">
                                        <div className="actions">
                                            <span className="action">
                                                {/*<AiFillHeart />*/}
                                            </span>
                                            <span className="action">
                                                {/*<BiCommentDetail />*/}
                                            </span>
                                            <span className="action">
                                                {/*<FaShare />*/}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="liked-by">
                                        <p>A <b>Jhon Doe</b> y otras 10 personas les gusta esto. </p>
                                    </div>
                                    
                                    <div className="comments text-muted">Ver todos los comentarios</div>
                            </div>
                        </div>
                    </div>
                    <div className="right mobile-hidden">
                        <div className="ads">
                            <div className="card">
                                <span className="muted-text">Puedes contactarnos para anunciarte aquí.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}