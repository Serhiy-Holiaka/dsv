import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeIcon from '@/components/ui/icons/HomeIcon';

const HeroSecondary = ({ imgSrc, breadCrumb, title, description }) => {
    return (
        <section className="relative h-full min-h-[500px]">
            <img width={1920} className="absolute w-full h-full object-cover z-[1]" src={imgSrc} alt="hero image" />
            <div className="absolute w-full h-full bg-black-dark/70 z-[2]" />
            <div className="relative container max-w-mid pt-[110px] mx-auto z-[3]">
                <div className="flex items-center font-regular text-[15px] text-white leading-none">
                    <Link className="flex items-center text-white mr-1 hover:underline hover:underline-offset-4 transition" to="/">
                        <HomeIcon className="w-4 h-4 mr-1 mb-[3px]" />
                        <p>Home</p>
                    </Link>/
                    <span className="text-white/50 ml-1">{breadCrumb}</span>
                </div>
                <h1 className="text-[96px] text-white leading-none mt-[90px] mb-8">{title}</h1>
                <p className="font-regular text-lg text-white/70">{description}</p>
            </div>
        </section>
    );
};

HeroSecondary.propTypes = {
    imgSrc: PropTypes.string,
    breadCrumb: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default HeroSecondary;
