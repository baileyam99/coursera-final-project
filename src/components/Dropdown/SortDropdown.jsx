import React from 'react';
import './SortDropdown.scss';

export function SortDropdown() {
    const options = ['Added', 'Priority', 'Name', 'Tag']
    return (
        <>
            <label id='sort-option-label' htmlFor='sort-options'>Sort by:</label>
            <select id='sort-options' className='sort-dropdown'>
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    )
}