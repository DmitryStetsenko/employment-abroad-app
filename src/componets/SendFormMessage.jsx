const SendFormMessage = ({setModal, isSend}) => {
    const resIcon = isSend
        ? <i className="send-form-message__icon send-form-message__icon_success fa-solid fa-envelope-circle-check"></i>
        : <i className="send-form-message__icon send-form-message__icon_fail fa-sharp fa-solid fa-circle-exclamation"></i>
    
    const resText = isSend 
        ? 
        <h3 className="send-form-message__text send-form-message__text_success">
            Mail send success
        </h3>
        : 
        <h3 className="send-form-message__text send-form-message__text_fail">
            Mail send fail
        </h3>

    return (
        <div className="send-form-message">
            <button 
                onClick={ () => setModal({isShow: false, component: null}) } 
                className="send-form-message__btn"
            >   { resText }
                { resIcon }
            </button>
        </div>
    );
}

export default SendFormMessage;