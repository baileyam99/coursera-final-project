import React from 'react';
import { FaBars } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import './ItemCard.scss';

// Component to display an item
export function ItemCard(props) {
    // Get props
    const { item, deleteItem } = props;

    // Function to handle deleting the item
    const deleteHandler = () => {
        deleteItem(item.id);
    }

    return (
        <div id={`card-item-${item.id}`} className="item-card">
            <div id={`card-item-${item.id}-content`} className="item-card-content">
                <IconContext.Provider value={{style: {transform: 'translateY(2px)'}}}>
                    <div style={{margin: '0 auto 0 0', cursor: 'move'}}><FaBars /></div>
                    <div><p>{item.content}</p></div>
                    <div className="delete-div" onClick={deleteHandler}><RiDeleteBin2Line /></div>
                </IconContext.Provider>
            </div>
        </div>
    );
};
