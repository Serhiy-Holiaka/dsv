import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import Error from '@/components/ui/form/error';
import clsx from 'clsx';
import classes from './CustomSelect.module.css';

const CustomSelect = forwardRef(
    (
        {
            id,
            instanceId,
            name,
            error,
            placeholder,
            label,
            defaultValue = '',
            options,
            isMulti = false,
            helperText = '',
            components,
            closeMenuOnSelect = true,
            hideSelectedOptions = false,
            ...rest
        },
        ref
    ) => {
        return (
            <div className="relative w-full min-w-0" onClick={e => e.stopPropagation()}>
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
                <ReactSelect
                    name={name}
                    classNamePrefix="c_s"
                    className={clsx(classes.customSelect, error && classes.error)}
                    placeholder={placeholder}
                    id={id}
                    isClearable
                    IndicatorSeparator={false}
                    instanceId={instanceId}
                    options={options}
                    isMulti={isMulti}
                    isSearchable={false}
                    defaultValue={defaultValue}
                    closeMenuOnSelect={closeMenuOnSelect}
                    hideSelectedOptions={hideSelectedOptions}
                    components={{
                        ...components,
                        IndicatorSeparator: null
                    }}
                    {...rest}
                    ref={ref}
                />
                {error && <Error>{helperText}</Error>}
            </div>
        );
    }
);

CustomSelect.displayName = 'CustomSelect';

CustomSelect.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    id: PropTypes.string,
    instanceId: PropTypes.string,
    isMulti: PropTypes.bool,
    label: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    placeholder: PropTypes.string,
    components: PropTypes.object,
    closeMenuOnSelect: PropTypes.bool,
    hideSelectedOptions: PropTypes.bool,
    defaultValue: PropTypes.string,
};

export default memo(CustomSelect);
