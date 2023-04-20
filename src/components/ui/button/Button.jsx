import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(
    ({ children, actionType = 'button', additionalClasses, onClick, ...rest }, ref) => {
        const handleClick =
            typeof onClick === 'function'
                ? e => {
                    e.stopPropagation();
                    onClick();
                }
                : null;

        return (
            <button
                ref={ref}
                type={actionType}
                className={`is-clickable button font-regular text-base text-white flex justify-center items-center bg-blue px-6 py-[18px] min-w-[105px] h-[52px] rounded-lg hover:bg-blue-600 ${additionalClasses}`}
                onClick={handleClick}
                {...rest}
            >
                <span>{children}</span>
            </button>
        );
    }
);

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    actionType: PropTypes.string,
    onClick: PropTypes.func,
    additionalClasses: PropTypes.string,
};

export default Button;
