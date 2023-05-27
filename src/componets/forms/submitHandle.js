import { urls } from "../../store/urls";

const submitHandle = async (data, submitData, header) => {
	const { submitSuccess, setSubmitSuccess, setIsSendForm, reset } = submitData;
	const mailData = new FormData();

	for (let name in data) {
		mailData.append(name, data[name]);
	}

	mailData.append('header', header);

	const response = await fetch(urls.mail, {
		method: 'POST',
		mode: "no-cors",
		body: mailData,
	});

	const result = await response.text();

	console.log(response);

	setSubmitSuccess(true);

	setIsSendForm(true);
	reset();
}

export default submitHandle;