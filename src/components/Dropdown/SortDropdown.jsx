import React from 'react';
import './SortDropdown.scss';

// Component for dropdown selection
export function SortDropdown(props) {
    // Get props and define options
    const { selection } = props;
    const options = ['Added', 'Priority', 'Name', 'Tag'];

    // Function to handle selection change
    const onChangeHandler = (e) => {
        selection(e.target.value);
    }

    return (
        <>
            <label id="sort-option-label" htmlFor="sort-options">Sort by:</label>
            <select id="sort-options" className="sort-dropdown" onChange={onChangeHandler}>
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    );
};
