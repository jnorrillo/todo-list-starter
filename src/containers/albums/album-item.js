import React from "react";

export const AlbumItem = ({ item, className }) => {

    return (
        <div className={className}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <h3>
                <a href={item.url} target="_blank">{item.title}</a></h3>
        </div>
    );
}