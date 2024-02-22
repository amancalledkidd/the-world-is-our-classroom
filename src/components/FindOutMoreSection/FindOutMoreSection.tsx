import Button from '../Button/Button';
import './FindOutMoreSection.scss'

const FindOutMoreSection = () => {
    return (
        <div className="find-section">
            <h1 className='find-section__header'>Reviews</h1>
            <div className="find-section__button">
                <Button label='Click Here' />
            </div>
        </div>
    );
}

export default FindOutMoreSection;