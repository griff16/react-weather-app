import React, { useState } from "react";
import classes from './weatherFetch.module.css';
import Conditions from '../Conditions/Conditions.js'

function WeatherFetch() {
    // Fields
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY,
        geoKey = process.env.REACT_APP_GEO_API_KEY;

    let [location, setLocation] = useState(''),
        [responseObj, setResponseObj] = useState({}),
        [error, setError] = useState(false),
        [loading, setLoading] = useState(false);

    // location forecast yet to be implemented
    function getLocationCast(e) {
        // fetch(`https://geolocation-db.com/json/${geoKey}`)  // get the location from client
        //     .then(resp => resp.json())
        //     .then(data => setLocation(data.state));

        setLocation('Seattle');

        // getForecast(e);
    }


    function getForecast(e) {
        e.preventDefault();  // prevent redirecting

        // set the state
        setError(false);
        setResponseObj({});  // clear the state
        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod !== 200) throw new Error();

                setResponseObj(data);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }

    return (
        <div>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <button className={classes.Button} type="submit">Get Weather</button>
            </form>

            {/* location forecast yet to be implemented */}
            {/* <button className={classes.Button} onClick={getLocationCast}>
                Get Your Location Weather</button> */}

            <Conditions
                responseObj={responseObj}
                error={error}
                loading={loading}
            />
        </div>
    );
}


export default WeatherFetch;
