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
        <button className={`is-clickable font-bold text-base rounded-t-lg ${isActive ? 'text-black-dark bg-white' : 'text-white bg-black-light'} transition-all overflow-hidden ${additionalClasses}`} onClick={handleClick}>
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
