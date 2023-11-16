import React, { useState } from "react";
import { BsPlusCircle } from 'react-icons/bs';
import { ListTitleModal } from "../Modals/ListTitleModal";
import { AddItemModal } from '../Modals/ItemModal';
import './ListCard.scss';
import { ItemCard } from "./ItemCard";

export function ListCard(props) {
    const { 
        id, 
        title, 
        priority,
        tags,
        itemData, 
        updateCard 
    } = props;
    const [showTitleModal, setShowTitleModal] = useState(false);
    const [showItemModal, setShowItemModal] = useState(false);
    const [lastItem, setLastItem] = useState()

    const addItemHandler = () => {
        if (!!itemData) {
            setLastItem(itemData.slice(itemData.length - 1, itemData.length));
        }
        setShowItemModal(true);
    }

    const updateTitleHandler = (newTitle) => {
        updateCard({
            id,
            title: newTitle,
            priority,
            tags,
            items: itemData,
        });
        setShowTitleModal(false);
    }

    const titleModalHandler = () => {
        setShowTitleModal(true);
    }

    const updateItemDataHandler = (newItemData) => {
        if (!!newItemData && newItemData.content !== '') {
            let data = itemData;
            data.push(newItemData);
            if (!!newItemData) {
                updateCard({
                    id,
                    title,
                    priority,
                    tags,
                    items: data,
                });
            }
        }
        setShowItemModal(false);
    }
    return (
        <>
            <div id={`list-card-${id}`} className='list-card'>
                <div id={`list-card-content-${id}`} className='list-card-content'>
                    <div id='card-title-button' className='title-button' onClick={titleModalHandler}>
                        <h2>{title}</h2>
                    </div>
                    {itemData.map((item) => 
                        <ItemCard key={item.id} item={item} />
                    )}
                    <button className="add-item-button" onClick={addItemHandler}><BsPlusCircle /> Add Item</button>
                </div>
            </div>
            {showTitleModal && <ListTitleModal title={title} setTitle={updateTitleHandler} />}
            {showItemModal && <AddItemModal prev={lastItem} setItem={updateItemDataHandler} />}
        </>
    )
}