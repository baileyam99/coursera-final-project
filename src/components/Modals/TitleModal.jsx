import React, { useState } from "react";
import './TitleModal.scss';

export function TitleModal(props) {
    const { title, setTitle } = props;
    const [newTitle, setNewTitle] = useState(title);
    const inputChangeHandler = (e) => {
       setNewTitle(e.target.value);
    }
    const handleSave = () => {
        setTitle(newTitle);
    }
    const handleCancel = () => {
        setTitle(title);
    }
    return (
        <>
            <div id='edit-title-modal' className='title-modal'>
                <div className='title-modal-content'>
                    <h2>Edit Title</h2>
                    <input id='title-input' type="text" name='title' value={newTitle} onChange={inputChangeHandler} />
                    <br />
                    <button className='main-button' onClick={handleSave}>Save</button>
                    <button className='outline-button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </>
    )
} 