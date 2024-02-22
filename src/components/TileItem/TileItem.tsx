import './TileItem.scss';

type TileItemProps = {
    title?: string;
    content?: string;
    image?: string;
}

const TileItem = ({ title, content, image }: TileItemProps) => {
    return (
        <div className="tile">
            {title && <h2 className='tile__header'>{title}</h2>}
            {content && <p className='tile__content'>{content}</p>}
            {image && <img src={image} alt={title} className='tile__img' />}
        </div>
    );
}

export default TileItem;