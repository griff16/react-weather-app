import React from 'react';
import classes from './Conditions.module.css'
import { countries } from 'country-data';

function Conditions(props) {

    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
            {props.loading && <div className={classes.Loader} />}

            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}, {countries[props.responseObj.sys.country].name}</strong></p>
                    <p>
                        It is currently {Math.round(props.responseObj.main.temp)} degrees out
                        with {props.responseObj.weather[0].description}.
                    </p>

                    <img src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}@2x.png`} />



                    {/* <h1>Current Weather in {location}</h1>
                    <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
                    <h1>Feels like: {feels_like} Degrees Celsius</h1>
                    <h1>Weather Parameter: {main}</h1>
                    <h1>Description : {description}</h1>
                    */}

                    {/*
                    [feels_like, setFeelsLike] = useState(''),
                    [mainTemp, setMainTemp] = useState(''),
                    [description, setDescription] = useState(''),
                    [main, setMain] = useState(''),
                    [iconID, setIconID] = useState(''), 
                 
                    // setFeelsLike(data.main.feels_like);
                    // setMainTemp(data.main.temp);
                    // setDescription(data.weather[0].description);
                    // setMain(data.weather[0].main);
                    */}
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;