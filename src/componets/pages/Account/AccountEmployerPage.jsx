import React from 'react';
import EmployerForm from '../../forms/EmployerForm';
import Form from '../../forms/Form';

const AccountEmployerPage = () => {
  return (
    <div className="account">
      <div className="container">
        <h2 className="account__title">Власний кабінет роботодавця</h2>
        <div className="account__content">
          <div className="account__content-block account__content-block_sidebar">
            <div className="account-aside">
              <h3 className="account-aside__title">Подані вакансії</h3>
            </div>
          </div>
          <div className="account__content-block">
            <div className="form-block">
              <Form type="medium"><EmployerForm/></Form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AccountEmployerPage;