import './Banner.scss';

type BannerProps = {
    content: string;
}

const Banner = ({ content } : BannerProps) => {
    return (
        <div className="banner">
            <h1>{content}</h1>
        </div>
    );
}

export default Banner;