const submitHandle = async (data, submitData) => {
	const { submitSuccess, setSubmitSuccess, setIsSendForm, reset } = submitData;
	// console.log('callbackfrom');
	// const mailData = new FormData();
	// for (let name in data) {
	// 	mailData.append(name, data[name]);
	// }

	// const response = await fetch(urls.mail, {
	// 	method: 'POST',
	// 	mode: "no-cors",
	// 	body: mailData,
	// });

	// console.log(response);

	// const result = await response.json();
	// console.log(result);

  console.log(data);

	setSubmitSuccess(false);

	setIsSendForm(true);
	submitSuccess && reset();
}

export default submitHandle;