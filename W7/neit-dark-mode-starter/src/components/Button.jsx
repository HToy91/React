const Button = ({ label, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
