import React from 'react';

import ModalWindow from "../ModalWindow";
import SendFormMessage from "../SendFormMessage";

const FormResultWindow = ({setIsSendForm, submitSuccess, ...props}) => {
  return (
    <ModalWindow setOuterState={ setIsSendForm } {...props}>
      <SendFormMessage setOuterState={ setIsSendForm } submitSuccess={ submitSuccess }/>
    </ModalWindow>
  );
};

export default FormResultWindow;