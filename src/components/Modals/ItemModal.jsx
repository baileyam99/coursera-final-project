import React, { useState } from 'react';
import './ItemModal.scss';

// Component for item creation UI
export function AddItemModal(props) {
    // Get props and initalize state variables
    const { setItem, prev } = props;
    const [newItem, setNewItem] = useState({
        id: prev[0]?.id !== undefined ? prev[0].id + 1 : 0,
        content: '',
    });

    // Function to handle text input
    const inputChangeHandler = (e) => {
        const prev = {...newItem};
        prev.content = e.target.value
        setNewItem(prev);
    };

    // Function to handle saving new item
    const handleSave = () => {
        const itemId = newItem.id;
        const itemContent = newItem.content;
        let payload;
        if (itemContent !== '' ) {
            payload = {
                id: itemId,
                content: itemContent,
            };
            setItem(payload);
        }
    }

    // Function to handle canceling creation
    const handleCancel = () => {
        setItem(false);
    }

    return (
        <>
            <div id="item-modal" className="item-modal">
                <div className="item-modal-content">
                    <h2>Add New Item</h2>
                    <textarea 
                        id="new-item-input"
                        cols={45} 
                        rows={8} 
                        name="item" 
                        value={newItem?.content} 
                        placeholder="Type your new item here."
                        onChange={inputChangeHandler} 
                    />
                    <br />
                    <button className="main-button" disabled={newItem.content === ''} onClick={handleSave}>Save</button>
                    <button className="outline-button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </>
    );
};
