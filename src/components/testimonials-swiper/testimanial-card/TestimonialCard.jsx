import PropTypes from 'prop-types';
import DoubleQuotesIcon from '@/components/ui/icons/DoubleQuotesIcon';

const TestimonialCard = ({ comment, name }) => {
    return (
        <div className="relative pt-16">
            <DoubleQuotesIcon className="absolute top-0 left-0" />
            <p className="font-light text-[32px] text-center leading-[130%] text-black-dark max-w-[770px] mx-auto">{comment}</p>
            <h6 className="font-bold text-base text-center py-6">{name}</h6>
            <DoubleQuotesIcon className="absolute bottom-0 right-0" />
        </div>
    );
};

TestimonialCard.propTypes = {
    comment: PropTypes.string,
    name: PropTypes.string,
};

export default TestimonialCard;
