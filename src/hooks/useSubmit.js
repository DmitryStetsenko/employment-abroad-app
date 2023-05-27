import { useState } from "react";

const useSubmit = () => {
  const [isSendForm, setIsSendForm] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

  return {
      isSendForm, setIsSendForm,
      submitSuccess, setSubmitSuccess,
  }
}

export default useSubmit;