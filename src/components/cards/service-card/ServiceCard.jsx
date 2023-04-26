import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';

const ServiceCard = ({ imgSrc, title, description, linkName }) => {
    return (
        <div>
            <div className="relative h-[330px] rounded-2xl overflow-hidden">
                <img
                    className="absolute w-full h-full object-cover"
                    width={370}
                    height={330}
                    src={imgSrc}
                    alt="card img"
                />
            </div>
            <h5 className="font-bold text-2xl text-black-dark my-4">{title}</h5>
            <p className="font-regular text-lg text-black-dark/70">{description}</p>
            {linkName && (
                <Link className="font-bold text-base leading-none flex items-center mt-4">
                    <span>{linkName}</span>
                    <ArrowIcon className="w-4 h-4 -rotate-90 ml-[8px] [&>path]:stroke-black-dark transition" />
                </Link>
            )}
        </div>
    );
};

ServiceCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkName: PropTypes.string,
};

export default ServiceCard;
