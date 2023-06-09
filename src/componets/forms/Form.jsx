import { Children, cloneElement } from "react";
import { useForm } from "react-hook-form";
import SendFormMessage from "../SendFormMessage";
import useFormSubmit from "../../hooks/useFormSubmit";
import submitHandle from "./submitHandle";
import FormResultWindow from "./FormResultWindow";


const Form = ({children, formTitle, setOuterState, type, ...props}) => {
  const submitData = useFormSubmit();
	// const { isSendForm, setIsSendForm, submitSuccess, setSubmitSuccess } = submitData;
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		mode: 'onBlur',
	});

	const formProps = { register, errors }

	let formTypeClass = '';

	submitData.reset = reset;

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
		default:
			formTypeClass = '';
	}

  const context = {
    props,
		formTitle,
    setOuterState,
    submitData, // useSubmit
    submitHandle,

		// useForm
    handleSubmit,
    formProps,

    formTypeClass,
    SendFormMessage,
    FormResultWindow,
  }

  const childrenWithProps = Children.map(
    children, child => cloneElement(child, { context })
  );

  return (
    <>
      { childrenWithProps }
    </>
  );
};

export default Form;