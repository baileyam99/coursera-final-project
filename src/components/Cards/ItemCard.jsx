import React from "react";
import './ItemCard.scss';

export function ItemCard(props) {
    const { key, item } = props;
    return (
        <div id={`${key}-card-item-${item.id}`} className="item-card">
            <div id={`${key}-card-item-${item.id}-content`} className="item-card-content">
                <p>{item.content}</p>
            </div>
        </div>
    )
}