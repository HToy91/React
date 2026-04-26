import { UseStateDemo } from './components/UseStateDemo';
import { useState } from 'react';
import UseEffectDemo from './components/UseEffectDemo';
import './App.css';
import {href, Routes} from "react-router-dom";
import {getLinkComponents} from "eslint-plugin-react/lib/util/linkComponents.js";

function App() {
  const [showUseStateDemo, setShowUseStateDemo] = useState(true);
  const [, setShowUseEffectDemo] = useState(false);

  const handleShowUseStateDemo = () => {
    setShowUseStateDemo(true);
    setShowUseEffectDemo(false);
  };

  const handleShowUseEffectDemo = () => {
    setShowUseStateDemo(false);
    setShowUseEffectDemo(true);
  };

  return (
    <div className="App">
      <button onClick={() => handleShowUseStateDemo()} className="button">
        UseState Demo
      </button>
      <button onClick={() => handleShowUseEffectDemo()} className="button">
        UseEffect Demo
      </button>

      <hr />
      {showUseStateDemo ? <UseStateDemo /> : <UseEffectDemo />}
    </div>
  );
}

export default App;
