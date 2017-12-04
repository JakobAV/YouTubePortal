import React from 'react';
import CheckBox from './../Shared/CheckBox';

const FilterList = (props) =>
        (
            <div>{
                props.channels.map(
                    (id) => <CheckBox key={id} type="checkbox" 
                                   value={id} 
                                   isChecked={props.filteredChannels.includes(id)}
                                   changeFilteredChannels={props.changeFilteredChannels} />)}
            </div>
        );


export default FilterList; 