import { useForm } from "react-hook-form";
import { Input, TextArea } from "../UI/form";

import useSubmit from "../../hooks/useSubmit";
import FormResultWindow from "./FormResultWindow";

const EmployerForm = ({ type }) => {
	const { isSendForm, setIsSendForm, submitSuccess, setSubmitSuccess } = useSubmit();
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		mode: 'onBlur',
	});

	const formProps = { register, errors }

	let formTypeClass = '';

	const submitHandle = data => {
		console.log(isSendForm, submitSuccess);

		setSubmitSuccess(false);
		console.log(data);

		setIsSendForm(true);
		submitSuccess && reset();
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
		<>
			<form
				className={`form form_employer  ${formTypeClass}`}
				onSubmit={handleSubmit(submitHandle)}
			>
				<div className="form__title-block">
					<h2 className="form__title">Заповніть форму для подання вакансії</h2>
					<p className="form__subtitle">
						Наш менеджер зв'яжеться з вами
						протягом 30 хвилин.
					</p>
				</div>

				<fieldset className="form__fields">
					<div className="form__data-block">
						<h3 className="form__block-title">Дані про вакансію</h3>

						<Input
							name="vacancyName" type="text" label="Назва вакансії*" placeholder="Введіть назву"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="vacancy" label="Розширений опис*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="speciality" type="text" label="Спеціальність*" placeholder="Введіть назву"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="education" label="Освіта та документи*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="skills" label="Можливості та навички*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="conditions" label="Умови праці*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="salary" label="Інформація про оплату*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="age" type="text" label="Можливий вік*" placeholder="18-50"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="drive" type="text" label="Водійське посвідчення*" placeholder="категорія"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="expirience" type="text" label="Досвід роботи*" placeholder="досвід"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="language" type="text" label="Рівень володіння мовами*" placeholder="Англійська - B1"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
					</div>
					<div className="form__data-block">
						<h3 className="form__block-title">Контактні дані компанії</h3>

						<Input
							name="name" type="text" label="Назва компанії" placeholder="Введіть ім'я"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="company" label="Дані про компанію*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="email" type="text" label="Електронна пошта*" placeholder="name@domain.com"
							validateOptions={{
								required: "Заповніть поле",
								pattern: {
									message: "невірний формат",
									value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
								}
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="phone" type="text" label="Телефон*" placeholder="лише цифри 0993332211"
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
							formProps={formProps}
						/>
						<TextArea
							name="additInfo" label="Додаткові відомості*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
					</div>
				</fieldset>

				<div className="form__btns">
					<button className="btn btn_form">Надіслати данні</button>
					<button className="btn btn_form-stroke" onClick={() => reset()}>Очистити форму</button>
				</div>
			</form>

			{ 
				isSendForm && <FormResultWindow
												overlay={ true }
												submitSuccess={ submitSuccess }
												setIsSendForm={ setIsSendForm }
												className="modal-window modal-window_center" 
											/> 
			}
		</>

	)
}

export default EmployerForm;