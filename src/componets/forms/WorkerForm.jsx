import { useForm } from "react-hook-form";
import { Input, TextArea } from "../UI/form";

const WorkerForm = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		mode: 'onBlur',
	});

	const formProps = { register, errors }

	const submit = data => {
		console.log(data);
		reset();
	}

	return (
		<form className="form form_employer" onSubmit={handleSubmit(submit)}>
			<div className="form__title-block">
				<h2 className="form__title">Заповніть данні</h2>
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
				<button className="btn btn_form-stroke" onClick={ () => reset() }>Очистити форму</button>
			</div>
		</form>
	)
}

export default WorkerForm;