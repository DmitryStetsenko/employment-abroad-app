import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const ModalWindow = ({ children, setOuterState, overlay, ...props }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [isShow, setIsShow] = useState(true);

  const clickHandler = () => {
    setIsShow(false);
    setOuterState(false);
  }

  return (
    <>
      {
        isShow ?
        <div className={`modal-window-overlay ${overlay || isMobile ? 'modal-window-overlay_show' : ''}`}>
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