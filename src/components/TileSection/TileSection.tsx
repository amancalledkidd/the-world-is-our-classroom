import './TileSection.scss';

type TileSectionProps = {
    tiles: React.ReactNode[];
}


const TileSection = ({tiles} : TileSectionProps) => {
    return (
        <div className="tile-section">
            {tiles.map((tile) => (
                <>
                {tile}
                </>
            ))}
        </div>
    );
}

export default TileSection;