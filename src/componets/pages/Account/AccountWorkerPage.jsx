import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchVacancyList } from "./../../../store/slices/favVacanciesSlice";

import WorkerForm from "../../forms/WorkerForm";
import { VacancyList } from "../../vacancy";
import Form from "../../forms/Form";

const AccountWorkerPage = () => {
  const { ids } = useSelector(state => state.favVacancies);
  const dispatch = useDispatch();

  useEffect(() => {
		dispatch(fetchVacancyList(ids));
	}, [ids]);

  return (
    <div className="account">
      <div className="container">
        <h2 className="account__title">Власний кабінет кандидата</h2>
        <div className="account__content">
          <div className="account__content-block account__content-block_sidebar">
            <div className="account-aside">
              <h3 className="account-aside__title">Обрані вакансії</h3>

              <VacancyList slice="favVacancies" type="slim" />

            </div>
          </div>
          <div className="account__content-block">
            <div className="form-block">

              <Form type="medium"><WorkerForm/></Form>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AccountWorkerPage;