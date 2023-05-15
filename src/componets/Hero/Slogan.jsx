const Slogan = ({...props}) => {
  return (
    <p className="slogan" { ...props }>
      Light your way
    </p>
  );
};

export default Slogan;