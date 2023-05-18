import { useForm } from "react-hook-form";
import { Input, TextArea } from "../UI/form";

const CallBackForm = ({ type, ...props }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		mode: 'onBlur',
	});

	const formProps = { register, errors }

	let formTypeClass = '';

	const submit = data => {
		console.log(data);
		reset();
	}

	switch (type) {
		case 'medium':
			formTypeClass = 'form_medium';
			break;
		case 'dark':
			formTypeClass = 'form_dark';
			break;
		case 'full':
			formTypeClass = 'form_full';
			break;
	}

	return (
		<form
			{...props} 
			className={`form form_contacts  ${ formTypeClass }`} 
			onSubmit={handleSubmit(submit)}
		>
			<div className="form__title-block">
				<h2 className="form__title">Замовити дзвінок</h2>
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
			</fieldset>

			<div className="form__btns">
				<button className="btn btn_form">Замовити дзвінок</button>
				<button className="btn btn_form-stroke" onClick={ () => reset() }>Очистити форму</button>
			</div>
		</form>
	)
}

export default CallBackForm;