import {useContext} from "react";
import {ThemeContext} from "../themeContext.jsx";

const Button = ({ label, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="button" onClick={onClick} style={{ color: theme.foreground }}>
      {label}
    </div>
  );
};

export default Button;
