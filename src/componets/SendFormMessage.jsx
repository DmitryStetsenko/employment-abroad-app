import { useState, useEffect } from "react";

const SendFormMessage = ({ submitSuccess, setOuterState }) => {
	const [showMessage, setShowMessage] = useState(true);

	const resIcon = submitSuccess
		? <i className="send-form-message__icon send-form-message__icon_success fa-solid fa-envelope-circle-check"></i>
		: <i className="send-form-message__icon send-form-message__icon_fail fa-sharp fa-solid fa-circle-exclamation"></i>

	const resText = submitSuccess
		?
		<h3 className="send-form-message__text send-form-message__text_success">
			Mail send success
		</h3>
		:
		<h3 className="send-form-message__text send-form-message__text_fail">
			Mail send fail
		</h3>

		const clickHandler = () => {
			setShowMessage(false);
			setOuterState(false);
		}

	return (
		<>
			{
				showMessage &&
				<div
					className="send-form-message send-form-message_btn"
					type="button"
					onClick={ () => clickHandler() }
				>
					{resText}
					{resIcon}
				</div>
			}
		</>

	);
}

SendFormMessage.defaultProps = {
	setModal: (state) => state,
	setOuterState: (state) => state,
}

export default SendFormMessage;