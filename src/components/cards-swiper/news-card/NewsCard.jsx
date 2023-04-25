import PropTypes from 'prop-types';

const NewsCard = ({ icon, title, descr }) => {
    return (
        <div className="flex flex-col items-center h-full min-h-[360px] border border-gray-light rounded-2xl px-5 py-8 hover:shadow-md transition">
            <div className="h-[96px]">{icon}</div>
            <div>
                <h6 className="font-bold text-2xl text-center text-black-dark mb-4 mt-8">{title}</h6>
                <p className="font-regular text-base leading-[150%] text-center text-black-dark/70">{descr}</p>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    title: PropTypes.string,
    descr: PropTypes.string,
};

export default NewsCard;
