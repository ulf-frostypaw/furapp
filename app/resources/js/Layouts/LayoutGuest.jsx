import Footer from "@/Components/Footer"
const LayoutGuest = ({children}) => {
    return(
        // EXPORTAR SOLAMENTE CUANDO ESTE DE INVITADO
        <div>
            {children}
            <Footer />
        </div>
    )
}
export default LayoutGuest