import { useCallback, useState } from "react";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import { Forecast } from "./components/Forecast/Forecast";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import weatherData from "./data/weather.json";
import "./App.css";

function App() {
    const [city, setCity] = useState("");

    const handleSearch = useCallback((value) => {
        if (!value) {
            setCity("");
            return;
        }

        const formatted = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        setCity(formatted);
    }, []);

    const weather = weatherData[city];
    const showError = city !== "" && !weather;

    return (
        <div className="app">
            <h1>🌤 Погода</h1>

            <SearchInput onSearch={handleSearch} />

            {weather && (
                <>
                    <WeatherCard city={city} data={weather} />
                    <Forecast days={weather.forecast} />
                </>
            )}

            {showError && <ErrorMessage city={city} />}
        </div>
    );
}

export default App;