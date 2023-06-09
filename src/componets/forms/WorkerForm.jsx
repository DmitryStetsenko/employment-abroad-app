import { Input, TextArea } from "../UI/form";

const WorkerForm = ({ context }) => {
	const {
		submitData, // useSubmit
		submitHandle,

		// useForm
		handleSubmit,
		formProps,

		formTypeClass,
		FormResultWindow,
	} = context;

	const { isSendForm, setIsSendForm, submitSuccess } = submitData;

	return (
		<>
			<form
				className={`form form_worker ${formTypeClass}`}
				onSubmit={handleSubmit(data => submitHandle(data, submitData, 'Данні кандидата'))}
			>
				<div className="form__title-block">
					<h2 className="form__title">Заповніть данні</h2>
					<p className="form__subtitle">
						Наш менеджер зв'яжеться з вами
						протягом 30 хвилин.
					</p>
				</div>

				<fieldset className="form__fields">

					<div className="form__data-block">
						<h3 className="form__block-title">Контактні дані</h3>

						<Input
							name="name" type="text" label="П.І.Б*" placeholder="П.І.Б"
							validateOptions={{}}
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

						<TextArea
							name="additInfo" label="Додаткові відомості*" placeholder="enter text"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
					</div>
					
					<div className="form__data-block">
						<h3 className="form__block-title">Дані для працевлаштування</h3>


						<Input
							name="age" type="text" label="Вік*" placeholder="лише цифри 25"
							validateOptions={{
								required: "Заповніть поле",
								pattern: {
									message: "невірний формат",
									value: /[0-9]/
								},
								minLength: {
									message: "мін. 2 цифр",
									value: 2
								},
								maxLength: {
									message: "макс. 2 цифр",
									value: 2
								}
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="married" type="text" label="Сімейний стан*" placeholder="одруження, діти і т.д."
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="drive" type="text" label="Водійське посвідчення*" placeholder="категорія"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="expirience" label="Досвід роботи*" placeholder="Період - посада"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<Input
							name="speciality" type="text" label="Спеціальність*" placeholder="Спеціальність"
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
							name="additEducation" label="Додаткова освіта*" placeholder="курси, підвищення квал., тощо"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="skills" label="Можливості та навички*" placeholder="ваші вміння"
							validateOptions={{
								required: "Заповніть поле",
							}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="interest" label="Інтереси, хоббі" placeholder="інтереси"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
						<TextArea
							name="language" type="text" label="Рівень володіння мовами*" placeholder="Англійська - B1"
							validateOptions={{}}
							className="form-item"
							formProps={formProps}
						/>
					</div>

				</fieldset>

				<div className="form__btns">
					<button className="btn btn_form">Надіслати данні</button>
					<button className="btn btn_form-stroke" onClick={() => submitData.reset()}>Очистити форму</button>
				</div>
			</form>

			{
				isSendForm && <FormResultWindow
					overlay={true}
					submitSuccess={submitSuccess}
					setIsSendForm={setIsSendForm}
					className="modal-window modal-window_center"
				/>
			}
		</>

	)
}

export default WorkerForm;