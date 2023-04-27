import PropTypes from 'prop-types';

const SupportCard = ({ title, descr }) => {
    return (
        <div className="flex flex-col items-center h-full min-h-[183px] border border-gray-light rounded-2xl px-5 py-8 hover:shadow-md transition">
            <div>
                <h6 className="font-bold text-2xl text-center text-black-dark mb-4">{title}</h6>
                <p className="font-regular text-base leading-[150%] text-center text-black-dark/70">{descr}</p>
            </div>
        </div>
    );
};

SupportCard.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
};

export default SupportCard;
