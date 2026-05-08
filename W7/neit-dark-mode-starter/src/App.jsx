import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext } from "./ThemeContext.jsx";
import { useEffect } from "react";
import Header from "./components/Header";
import { useContext } from "react";

function App() {
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        document.body.style.background = theme.background
    }, [theme]);

  return (
    <div className="App" style={{ backgroundColor: theme.background, color: theme.foreground }}>
        <header className="header">
            <Header className="header-content">
                <h2>Dark Mode Exercise</h2>
                <ToggleSwitch />
            </Header>
        </header>
        <div className="main-container">
            <Card style={{ justifyContent: 'space-between' }}>
                A card with stuff
                <Button label="Click me" onClick={() => {}} />
            </Card>
        </div>
    </div>
  );
}

export default App;
