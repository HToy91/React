import {useContext} from "react";
import {ThemeContext} from "../ThemeContext.jsx";

const ToggleSwitch = ({ onToggle }) => {
    const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
