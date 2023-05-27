import React, { useEffect, useState } from 'react';

const ModalWindow = ({ children, setOuterState, ...props }) => {
  const [isShow, setIsShow] = useState(true);

  const clickHandler = () => {
    setIsShow(false);
    setOuterState(false);
  }

  return (
    <>
      {
        isShow ? 
        <div {...props}>
          { children }
          <button type="button" onClick={() => clickHandler()} className="btn btn_close">X</button>
        </div>
        :<></>
      }
    </>
  )
}

ModalWindow.defaultProps = {
	setOuterState: (state) => state,
}

export default ModalWindow;