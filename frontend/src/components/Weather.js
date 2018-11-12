import React from 'react';

const Weather = props => (
    <div>
        { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
        { props.temperature && <p>Temperature: {props.temperature} F</p> }
        { props.conditions && <p>Conditions: {props.conditions}</p> }
        { props.humidity && <p>Humidity: {props.humidity}%</p> }
        { props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;