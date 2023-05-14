import React from 'react';

const TextArea = ({name, label, formProps, validateOptions, className, ...props}) => {
  const { register, errors } = formProps;
  return (
    <label className={ className } >
        <span className={`${ className }__labelText`}>{ label }</span>
        <textarea
          name={ name } 
          { ...register(name, { ...validateOptions })} 
          { ...props }
          className={`${ className }__input`}
        ></textarea>
        {
          errors[name] && <span className={`${ className }__error-area`}>{ errors[name].message }</span>
        }
        
    </label>
  );
};

export default TextArea;