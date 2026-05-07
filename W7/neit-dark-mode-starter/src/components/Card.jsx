import {ThemeContext} from "../themeContext.jsx";
import {useContext} from "react";

const Card = ({ children, style }) => {
    const { theme } =useContext(ThemeContext);
  return (
    <div className="card" style={{ backgroundColor: theme.background }}>
      <div className="card-container" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Card;
