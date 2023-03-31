// DEFAULT BUTTON OWO

const Button = ({buttonValue, buttonClass, buttonContent, buttonName}) =>{
    <button value={buttonValue} className={'button ' + buttonClass} name={buttonName}>{buttonContent}</button>
}