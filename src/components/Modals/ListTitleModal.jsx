import React, { useState } from "react";
import './ListTitleModal.scss';

export function ListTitleModal(props) {
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
            <div id='list-modal' className='list-modal'>
                <div className='list-modal-content'>
                    <h2>Edit List Title</h2>
                    <input id='list-title-input' type="text" name='title' value={newTitle} onChange={inputChangeHandler} />
                    <br />
                    <button className='main-button' onClick={handleSave}>Save</button>
                    <button className='outline-button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </>
    )
}