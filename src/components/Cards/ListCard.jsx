import React, { useState, useRef } from "react";
import { BsPlusCircle } from 'react-icons/bs';
import { ListTitleModal } from "../Modals/ListTitleModal";
import { AddItemModal } from '../Modals/ItemModal';
import { ItemCard } from "./ItemCard";
import './ListCard.scss';

export function ListCard(props) {
    const dragItem = useRef();
    const dragOverItem = useRef();
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
    const [lastItem, setLastItem] = useState();

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

    const deleteItemHandler = (id) => {
        let prev = itemData;
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].id === id) {
                prev.splice(i, 1); 
            }
        }
        updateCard({
            id,
            title,
            priority,
            tags,
            items: prev,
        });
    }

    const dragStart = (position) => {
        dragItem.current = position;
    };
     
    const dragEnter = (position) => {
        dragOverItem.current = position;
    };

    const drop = () => {
        const copyListItems = [...itemData];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        updateCard({
            id,
            title,
            priority,
            tags,
            items: copyListItems,
        });
    };

    return (
        <>
            <div id={`list-card-${id}`} className='list-card'>
                <div id={`list-card-content-${id}`} className='list-card-content'>
                    <div id='card-title-button' className='title-button' onClick={titleModalHandler}>
                        <h2>{title}</h2>
                    </div>
                    {itemData && itemData.map((item, key) => 
                        <div
                            key={`item-${item.id}`}
                            draggable
                            onDragStart={(e) => dragStart(e, key)}
                            onDragEnter={(e) => dragEnter(e, key)}
                            onDragEnd={drop}
                        >
                            <ItemCard key={`item-${item.id}`} item={item} deleteItem={deleteItemHandler} />
                        </div>
                    )}
                    <button className="add-item-button" onClick={addItemHandler}><BsPlusCircle /> Add Item</button>
                </div>
            </div>
            {showTitleModal && <ListTitleModal title={title} setTitle={updateTitleHandler} />}
            {showItemModal && <AddItemModal prev={lastItem} setItem={updateItemDataHandler} />}
        </>
    )
}