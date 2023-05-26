import React, { useState } from 'react';

const ModalWindow = ({ children, setModal, ...props }) => {
  const [isShow, setIsShow] = useState(false);

  const handlerClose = setModal ? setModal : setIsShow;

  return (
    <>
      {
        isShow ? 
        <div {...props}>
          { children }
          <button type="button" onClick={() => setModal({isShow: false})} className="btn btn_close">X</button>
        </div>
        :<></>
      }
    </>
  )
}

export default ModalWindow;