import React from 'react';
import './SortDropdown.scss';

export function SortDropdown(props) {
    const { selection } = props;
    const options = ['Added', 'Priority', 'Name', 'Tag']

    const onChangeHandler = (e) => {
        selection(e.target.value);
    }

    return (
        <>
            <label id='sort-option-label' htmlFor='sort-options'>Sort by:</label>
            <select id='sort-options' className='sort-dropdown' onChange={onChangeHandler}>
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    )
}