import React, { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ children, tagName, onOutsideClick, ...props }) => {
  const wrapperRef = useRef(null);
  const element = React.createElement(
    tagName, 
    {
      ...props,
      ref: wrapperRef,
    },
    children
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onOutsideClick]);

  return element;
};

export default OutsideClickHandler