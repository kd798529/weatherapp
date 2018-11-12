import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name='city' placeholder="City..." />
            <input type="text" name='country' placeholder="Country..." />
            <button>search</button>
        </form>
    </div>
);

export default Form;