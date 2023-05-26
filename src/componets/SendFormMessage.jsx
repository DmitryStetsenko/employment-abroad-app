const SendFormMessage = ({setModal, setSendMessage, isSend}) => {
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
        <button 
            className="send-form-message send-form-message_btn"
            type="button" 
            onClick={ () => setModal ? setModal({isShow: false, component: null}) : setSendMessage(false) } 
        >
            { resText }
            { resIcon }
        </button>
    );
}


SendFormMessage.defaultProps = {
    setModal: null,
    setSendMessage: null
  };

export default SendFormMessage;