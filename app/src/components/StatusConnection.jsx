import { Offline } from 'react-detect-offline'
import Card from './Card'

const StatusConnection = () => {
    return(
        
        <Offline>
            <Card
                CardClass={'card-warning'}
                CardContent={'No tienes conexión a internet.'}
            />
        </Offline>
    )
}
export default StatusConnection;