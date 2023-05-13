import { useForm } from "react-hook-form";
import { Input } from "../UI/form";

const ContactsForm = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		mode: 'onBlur',
	});

	const formProps = { register, errors }

	const submit = data => {
		console.log(data);
		reset();
	}

	return (
		<form className="form form_contacts" onSubmit={handleSubmit(submit)}>
			<h2 className="form__title">Заполните форму</h2>

			<fieldset className="form__fields">
				<Input 
					name="email" type="text" label="email*" placeholder="name@domain.com"
					validateOptions={{
						required: "Заполните поле",
						pattern: {
							message: "неправильный формат",
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
						}
					}}
					className="form-item" 
					formProps={ formProps }
				/>
				<Input 
					name="email1" type="text" label="email*" placeholder="name@domain.com"
					validateOptions={{
						required: "Заполните поле",
						pattern: {
							message: "неправильный формат",
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
						}
					}}
					className="form-item" 
					formProps={ formProps }
				/>
			</fieldset>

			<div className="form__btns">
				<button className="btn btn_form">Отправить сообщение</button>
				<button className="btn btn_form-stroke" onClick={ () => reset() }>Очистить форму</button>
			</div>
		</form>
	)
}

export default ContactsForm;