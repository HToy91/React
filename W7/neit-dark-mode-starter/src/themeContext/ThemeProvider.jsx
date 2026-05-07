import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import {ThemeContext, themes} from "./themeContext/ThemeContext.jsx";
import {useState} from "react";
import Header from "./components/Header";

function App() {
    const [theme, setTheme] = useState(themes.light)

    const toggleTheme = () => {
        setTheme((prevValue) => {
            return prevValue === themes.dark ? themes.light : themes.dark;
        })
    }

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className="App" style={{ backgroundColor: theme.background, color: theme.foreground, minHeight: '100vh' }}>
                <header className="header">
                    <Header className="header-content">
                        <h2>Dark Mode Exercise</h2>
                        <ToggleSwitch onToggle={toggleTheme} />
                    </Header>
                </header>
                <div className="main-container">
                    <Card style={{ justifyContent: 'space-between' }}>
                        A card with stuff
                        <Button label="Click me" onClick={() => {}} />
                    </Card>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
