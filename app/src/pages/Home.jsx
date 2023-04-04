//import CardComponentDiv from "../components/CardComponentDiv";
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Layout from "../components/Layout";
//import Textarea from "../components/Textarea";
import ReaderJournal from "../components/Read/Journal";
export default function Home(){
    return(
        <Layout titlePage={'Inicio'}>
                <Card CardContent={<ReaderJournal JournalContent={"[link]https://www.youtube.com/embed/AB6RjNeDII0[/link]"} />} CardClass={'card-warning'} />
        </Layout>
    );
}