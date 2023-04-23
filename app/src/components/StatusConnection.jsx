import { Offline } from 'react-detect-offline'
import Card from './Card'

const StatusConnection = () => {
    return(
        
        <Offline>
            <Card CardClass={'card-warning'}>Parece que tienes problemas de conexión a internet.</Card>
        </Offline>
    )
}
export default StatusConnection;