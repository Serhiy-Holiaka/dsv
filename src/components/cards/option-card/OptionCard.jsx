import PropTypes from 'prop-types';

const OptionCard = ({ imgSrc, title, description }) => {
    return (
        <div>
            <div className="relative h-[240px]">
                <img className="absolute w-full h-full object-cover" width={270} height={240} src={imgSrc} alt="card img" />
            </div>
            <h5 className="font-bold text-2xl text-black-dark my-4">{title}</h5>
            <p className="font-regular text-lg text-black-dark/70">{description}</p>
        </div>
    );
};

OptionCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default OptionCard;
