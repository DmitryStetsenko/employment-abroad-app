import React from 'react';

const ModalWindow = ({ children, setModal }) => {
  return (
    <div className="modal-window">
      { children }
      <button type="button" onClick={() => setModal({isShow: false})} className="btn btn_close">X</button>
    </div>
  )
}

export default ModalWindow;