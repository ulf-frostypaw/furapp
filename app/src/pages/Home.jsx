import { Link } from 'react-router-dom'
import Layout from "../components/Layout";
//import CardComponentDiv from "../components/CardComponentDiv";
//import Button from '../components/Button' ADD SUSPENSE
import Card from '../components/Card'
//import Textarea from "../components/Textarea";
//import ReaderJournal from "../components/Read/Journal";
export default function Home(){
    return(
        <Layout titlePage={'Inicio'}>
             {/* UPDATE CARDS - IN PROD */}
            <Card>
                <h1 className='big-title'>Actualizando</h1>
                <span className='title-description'>Estoy trabajando en una nueva y mejorada versión de FurrApp. Puedes ingresar al repo para contribuir al desarrollo del proyecto en <Link to={"https://github.com/ulf-frostypaw/furapp"}>GitHub</Link>.</span>
            </Card>
        </Layout>
    );
}