const SalaryInfo = ({ salaryinfo, ...props }) => {
  return (
    <div {...props}>
      <h4 className="salary-info__title">Детальніше про оплату:</h4>
      <div className="salary-info__content" dangerouslySetInnerHTML={{ __html: salaryinfo }} ></div>
      <button className="salary-info__btn-close">x</button>
    </div>
  );
};

export default SalaryInfo;