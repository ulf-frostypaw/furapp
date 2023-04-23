import { Link } from 'react-router-dom'
import Layout from "../components/Layout";
//import CardComponentDiv from "../components/CardComponentDiv";
//import Button from '../components/Button' ADD SUSPENSE
import Card from '../components/Card'
//import Textarea from "../components/Textarea";
//import ReaderJournal from "../components/Read/Journal";
//import { app_firebase } from '../fb';
// NO MOSTRAR EL LAYOUT CUANDO NO SE HAYA INICIADO SESIón
import Loading from '../components/loading';
export default function Home(){
    return(
        <><Loading />
        <Layout titlePage={'Inicio'}>
             
        </Layout>
        </>
    );
}