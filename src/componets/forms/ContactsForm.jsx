import { Input, TextArea } from "../UI/form";

const ContactsForm = ({ context }) => {
	const {
    props,
    setOuterState,
    submitData, // useSubmit
    submitHandle,

		// useForm
    handleSubmit,
    formProps,

    formTypeClass,
    SendFormMessage,
  } = context;

	const { isSendForm, setIsSendForm, submitSuccess } = submitData;

	return (
		<form
			{...props}
			className={`form form_contacts  ${ formTypeClass }`} 
			onSubmit={handleSubmit(data => submitHandle(data, submitData))}
		>
			<div className="form__title-block">
				<h2 className="form__title">Заповніть форму</h2>
				<p className="form__subtitle">
					Наш менеджер зв'яжеться з вами
					протягом 30 хвилин.
				</p>
			</div>

			<fieldset className="form__fields">
			<Input 
					name="name" type="text" label="name" placeholder="Введіть ім'я"
					validateOptions={{}}
					className="form-item" 
					formProps={ formProps }
				/>
				<Input 
					name="email" type="text" label="email*" placeholder="name@domain.com"
					validateOptions={{
						required: "Заповніть поле",
						pattern: {
							message: "невірний формат",
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
						}
					}}
					className="form-item" 
					formProps={ formProps }
				/>
				<Input 
					name="phone" type="text" label="phone*" placeholder="лише цифри 0993332211"
					validateOptions={{
						required: "Заповніть поле",
						pattern: {
							message: "невірний формат",
							value: /[0-9]/
						},
						minLength: {
							message: "мін. 10 цифр",
							value: 10
						},
						maxLength: {
							message: "макс. 10 цифр",
							value: 10
						}
					}}
					className="form-item" 
					formProps={ formProps }
				/>
				<TextArea 
					name="subject" label="subject*" placeholder="enter text"
					validateOptions={{
						required: "Заповніть поле",
					}}
					className="form-item" 
					formProps={ formProps }
				/>
			</fieldset>

			<div className="form__btns">
				<button className="btn btn_form">Надіслати данні</button>
				<button className="btn btn_form-stroke" onClick={ () => submitData.reset() }>Очистити форму</button>
			</div>

			{ 
				isSendForm && 
				<SendFormMessage 
					submitSuccess={ submitSuccess } 
					setOuterState={ setOuterState ? setOuterState : setIsSendForm } 
				/>
			}

		</form>
	)
}

export default ContactsForm;