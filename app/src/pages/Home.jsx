//import CardComponentDiv from "../components/CardComponentDiv";
import Layout from "../components/Layout";
import Textarea from "../components/Textarea";
import ReaderJournal from "../components/Read/Journal";
export default function Home(){
    return(
        <Layout titlePage={'Inicio'}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum exercitationem quasi eligendi rerum iure cupiditate asperiores saepe tempore accusantium! Vitae earum, fugit pariatur sint provident doloribus laudantium recusandae. Accusamus!</span>
                <ReaderJournal />
                <Textarea />
        </Layout>
    );
}