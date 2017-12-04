import React from 'react';

const CheckBox = (props) => (
    <div>{props.isChecked ?
        <input checked type="checkbox" value={props.value} onChange={() => props.changeFilteredChannels(props.value)} /> :
        <input type="checkbox" value={props.value} onChange={() => props.changeFilteredChannels(props.value)} />}
    </div>
);

export default CheckBox;