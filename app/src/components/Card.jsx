
const Card = ({CardContent, CardClass}) => {
    return(
        <div className={'card ' + CardClass}>{CardContent}</div>
    );
}
export default Card;