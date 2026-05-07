import {ThemeContext} from "../ThemeContext.jsx";
import {useContext} from "react";

const Card = ({ children, style }) => {
    const { theme } =useContext(ThemeContext);

  return (
    <div className="card" style={{ backgroundColor: theme.background, color: theme.foreground }}>
      <div className="card-container" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Card;
