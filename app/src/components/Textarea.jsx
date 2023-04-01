const Textarea = ({textAreaName, textAreaClass, textAreaValue}) => {
    return(
        <textarea className={'textarea ' + textAreaClass} name={textAreaName} autoComplete="off" cols="30" rows="10" value={textAreaValue} placeholder="Escribe aquí ouo"></textarea>
    )
}
export default Textarea;