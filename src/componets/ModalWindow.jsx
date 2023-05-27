import React, { useEffect, useState } from 'react';

const ModalWindow = ({ children, setOuterState, overlay, ...props }) => {
  const [isShow, setIsShow] = useState(true);

  const clickHandler = () => {
    setIsShow(false);
    setOuterState(false);
  }

  return (
    <>
      {
        isShow ?
        <div className={`modal-window-overlay ${overlay ? 'modal-window-overlay_show' : ''}`}>
          <div {...props}>
            { children }
            <button type="button" onClick={() => clickHandler()} className="btn btn_close">X</button>
          </div>
        </div>
        
        :<></>
      }
    </>
  )
}

ModalWindow.defaultProps = {
	setOuterState: (state) => state,
  overlay: false,
}

export default ModalWindow;