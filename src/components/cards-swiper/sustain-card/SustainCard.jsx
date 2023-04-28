import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';

const SustainCard = ({ icon, title, descr, linkName }) => {
    return (
        <div className="flex flex-col items-center h-full min-h-[380px] border border-gray-light rounded-2xl px-5 py-8 hover:shadow-md transition">
            <div className="h-[96px]">{icon}</div>
            <div>
                <h6 className="font-bold text-2xl text-center text-black-dark mb-4 mt-8">{title}</h6>
                <p className="font-regular text-base leading-[150%] text-center text-black-dark/70 mb-8">{descr}</p>
                <Link className="font-bold text-base leading-none flex justify-between items-center">
                    <span>{linkName}</span>
                    <ArrowIcon className="w-4 h-4 -rotate-90 mr-[3px] [&>path]:stroke-black-dark transition" />
                </Link>
            </div>
        </div>
    );
};

SustainCard.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    title: PropTypes.string,
    descr: PropTypes.string,
    linkName: PropTypes.string,
};

export default SustainCard;
