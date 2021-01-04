import React from 'react';
import WeatherFetch from './components/Weather/weatherFetch.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Weather App</h1>
            </header>

            <main>
                <WeatherFetch />
            </main>

            <footer>
                Page created by x.zhang
            </footer>
        </div>
    );
}

export default App;
