import React from 'react';

const ModalWindow = ({ children, setModal, ...props }) => {
  return (
    <div {...props}>
      { children }
      <button type="button" onClick={() => setModal({isShow: false})} className="btn btn_close">X</button>
    </div>
  )
}

export default ModalWindow;