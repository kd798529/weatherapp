import React from 'react';

const Weather = props => (
    <div className="weather__info">
        { 
            props.city && props.country && <p className="weather__key">Location: 
            <span className="weather__value">{props.city}, {props.country}</span>
            </p> 
        }
        { 
            props.temperature && <p className="weather__key">Temperature: 
            <span className="weather__value">{props.temperature}</span>
             F</p> 
        }
        { 
            props.conditions && <p className="weather__key">Conditions: 
            <span className="weather__value">{props.conditions}</span>
            </p> 
        }
        { 
            props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value">{props.humidity}</span>
            %</p>
         }
        { 
            props.error && <p className="weather__error">
            {props.error}
            </p>
        }
    </div>
);

export default Weather;