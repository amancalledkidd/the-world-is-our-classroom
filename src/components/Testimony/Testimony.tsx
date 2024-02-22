import './Testimony.scss';

type TestimonyProps = {
    content: string;
    author: string;
}

const Testimony = ({ content, author } : TestimonyProps) => {
    return (
        <div className="testimony">
            <p className='testimony__content'>{content}</p>
            <p className='testimony__author'>-{author}</p>
        </div>
    );
}

export default Testimony;