import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Error from '@/components/ui/form/error';

const Input = forwardRef(
    (
        {
            id,
            type = 'text',
            name,
            value,
            placeholder,
            error,
            onChange,
            onBlur,
            helperText,
            label,
            additionalClasses,
            ...rest
        },
        ref
    ) => {
        const changeHandler = e => {
            if (typeof onChange === 'function') {
                onChange(e);
            }
        };

        const blurHandler = e => {
            if (typeof onBlur === 'function') {
                onBlur(e);
            }
        };

        return (
            <div className={`relative min-w-0 ${additionalClasses}`}>
                {label && (
                    <label
                        htmlFor={id}
                        onClick={e => e.stopPropagation()}
                        className={`block font-regular text-[15px] leading-[130%] ${
                            error ? 'text-red' : 'text-black-dark'
                        } mb-4`}
                    >
                        {label}
                    </label>
                )}
                <input
                    className={`outline-none w-full font-regular text-[15px] leading-[130%] text-black-dark border border-black-dark border-opacity-25 hover:border-blue-light focus:border-blue-light ${
                        error && '!border-red'
                    } py-[15px] px-4 transition-all duration-250`}
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onClick={e => e.stopPropagation()}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                    {...rest}
                    ref={ref}
                />
                {error && <Error>{helperText}</Error>}
            </div>
        );
    }
);

Input.displayName = 'Input';

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    helperText: PropTypes.string,
    label: PropTypes.string,
    additionalClasses: PropTypes.string,
};

export default memo(Input);
