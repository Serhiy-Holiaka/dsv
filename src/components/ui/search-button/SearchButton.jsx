import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuContext';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/form/input';
import Button from '@/components/ui/button';
import SearchIcon from '@/components/ui/icons/SearchIcon';

const SearchButton = ({ menuId }) => {
    const btnRef = useRef(null);
    const { activeSubId, setActiveSubId, setIsMobMenuOpen } = useMenuContext();
    const [isOpen, setIsOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    useEffect(() => {
        activeSubId !== menuId && isOpen && setIsOpen(false);
    }, [activeSubId, menuId, isOpen, setIsOpen]);

    const onSearchClick = () => {
        const activeId = btnRef.current.id;
        if (activeId && !isOpen) {
            setActiveSubId(activeId);
            setIsOpen(true);
            setIsMobMenuOpen(false);
        } else {
            setActiveSubId('');
            setIsOpen(false);
        }
    };

    return (
        <div className="relative flex items-center">
            <button
                ref={btnRef}
                id={menuId}
                type="button"
                onClick={onSearchClick}
                className="is-clickable z-[5] [&_path]:hover:stroke-blue"
            >
                <SearchIcon
                    className="transition-colors"
                />
            </button>
            <AnimatePresence initial={false}>
                {activeSubId === menuId && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { type: 'linear', duration: 0.15 },
                        }}
                        exit={{
                            y: -10,
                            opacity: 0,
                            transition: { type: 'linear', duration: 0.15 },
                        }}
                        className="absolute top-[35px] -right-[103px] z-[5] w-[490px] rounded-lg py-7 px-7 bg-white shadow-md"
                    >
                        <div className="relativew-0 h-0 before:absolute before:-top-[3px] before:right-[107px] before:rotate-45 before:w-3 before:h-3 before:bg-white" />
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
                            <div className="flex">
                                <Input
                                    id="search"
                                    placeholder="Type your request"
                                    error={errors.search ? true : false}
                                    helperText={errors.search && 'Field is required!'}
                                    additionalClasses="[&>input]:rounded-r-none"
                                    {...register('search', { required: true })}
                                />
                                <Button additionalClasses="rounded-l-none px-10" type="submit">Search</Button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

SearchButton.propTypes = {
    menuId: PropTypes.string.isRequired,
};

export default SearchButton;
