import React from 'react';
import './TileItem.scss';

type TileItemProps = {
    title?: string;
    content?: string;
    image?: string;
    color?: "blue" | "green";
    component?: React.ReactNode;
}

const TileItem = ({ title, content, image, color, component }: TileItemProps) => {

    const classColor = color ? `tile--${color}` : '';

    return (
        <div className={`tile ${classColor}`}>
            {component && component}
            {!component && (
                <>
                    {title && <h2 className='tile__header'>{title}</h2>}
                    {content && <p className='tile__content'>{content}</p>}
                    {image && <img src={image} alt={title} className='tile__img' />}
                </>
            )}
        </div>
    );
}

export default TileItem;