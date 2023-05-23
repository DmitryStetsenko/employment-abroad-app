const Slogan = ({...props}) => {
  return (
    <p translate="no" className="slogan" { ...props }>
      Light your way
    </p>
  );
};

export default Slogan;