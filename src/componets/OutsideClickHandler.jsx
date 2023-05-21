import { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ children, onOutsideClick, ...props }) => {
  const wrapperRef = useRef(null);

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

  return <div {...props} ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler