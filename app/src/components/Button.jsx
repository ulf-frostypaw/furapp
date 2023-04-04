// DEFAULT BUTTON OWO

const Button = ({buttonValue, buttonClass, buttonContent, buttonName}) =>{
    return(
        <button value={buttonValue} className={'button card ' + buttonClass} name={buttonName}>{buttonContent}</button>
    )
}

export default Button;