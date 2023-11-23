import React, { useState } from 'react';
import './ListTitleModal.scss';

// Component to edit a list's title
export function ListTitleModal(props) {
    // Get props and initalize state variables
    const { title, setTitle } = props;
    const [newTitle, setNewTitle] = useState(title);

    // Function to handle text input
    const inputChangeHandler = (e) => {
       setNewTitle(e.target.value);
    };

    // Function to handle saving new title
    const handleSave = () => {
        setTitle(newTitle);
    };

    // Function to handle canceling the edit
    const handleCancel = () => {
        setTitle(title);
    };

    return (
        <>
            <div id="list-modal" className="list-modal">
                <div className="list-modal-content">
                    <h2>Edit List Title</h2>
                    <input 
                        id="list-title-input" 
                        type="text" 
                        name="title" 
                        value={newTitle} onChange={inputChangeHandler} 
                    />
                    <br />
                    <button className="main-button" onClick={handleSave}>Save</button>
                    <button className="outline-button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </>
    );
};
