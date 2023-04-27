import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';
import { LEARN_LIST } from '@/constants/home.constants';

const LearnAbout = ({ itemsList = LEARN_LIST }) => {
    return (
        <div className="container max-w-mid grid grid-cols-4 gap-8">
            {itemsList.map(({ imgSrc, title, linkName }, i) => (
                <div
                    key={i}
                    className="min-h-[357px] border border-gray-light rounded-2xl overflow-hidden [&_img]:hover:scale-105 [&_svg]:hover:translate-x-[6px] hover:shadow-md transition"
                >
                    <div className="relative h-[200px] overflow-hidden">
                        <img
                            className="absolute w-full h-full object-cover transition-transform duration-300"
                            width={268}
                            src={imgSrc}
                            alt="card img"
                        />
                    </div>
                    <div className="px-5 py-6">
                        <h6 className="font-bold text-2xl text-black-dark mb-6">{title}</h6>
                        <Link className="font-bold text-base leading-none flex justify-between items-center">
                            <span>{linkName}</span>
                            <ArrowIcon className="w-5 h-5 -rotate-90 mr-[3px] [&>path]:stroke-black-dark transition" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

LearnAbout.propTypes = {
    itemsList: PropTypes.arrayOf(PropTypes.object),
};

export default LearnAbout;
