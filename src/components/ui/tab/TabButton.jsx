import { memo } from 'react';
import PropTypes from 'prop-types';

const TabButton = ({ children, isActive, onClick, additionalClasses }) => {
    const handleClick =
        typeof onClick === 'function'
            ? e => {
                e.stopPropagation();
                onClick();
            }
            : null;


    return (
        <button className={`is-clickable font-medium text-[15px] text-black-dark ${isActive ? 'text-opacity-100 underline decoration-[#FF0000] underline-offset-8' : 'text-opacity-70'} uppercase hover:text-opacity-100 transition-all ${additionalClasses}`} onClick={handleClick}>
            {children}
        </button>
    );
};

TabButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    additionalClasses: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
};

export default memo(TabButton);
