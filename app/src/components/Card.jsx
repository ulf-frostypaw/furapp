
// CardContent
const Card = ({children, CardClass}) => {
    return(
        <div className={'card ' + CardClass}>
            {children}
        </div>
    );
}
export default Card;