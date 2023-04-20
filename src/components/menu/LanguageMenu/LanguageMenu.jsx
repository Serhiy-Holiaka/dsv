import { memo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuContext';
import { LANGUAGE_LIST } from '@/constants/language.constats';
import LanguageIcon from '@/components/ui/icons/LanguageIcon';

const LanguageMenu = ({ menuId, langList = LANGUAGE_LIST }) => {
    const btnRef = useRef(null);
    const [langId, setLangId] = useState('1gb');
    const [isOpen, setIsOpen] = useState(false);
    const { activeSubId, setActiveSubId, setIsMobMenuOpen } = useMenuContext();

    useEffect(() => {
        activeSubId !== menuId && isOpen && setIsOpen(false);
    }, [activeSubId, menuId, isOpen, setIsOpen]);

    const onSubMenuClick = () => {
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

    const onSubMenuItemClick = (e, id) => {
        e.stopPropagation();
        setLangId(id);
        setActiveSubId('');
    };

    return (
        <div className="relative flex items-center">
            <button
                ref={btnRef}
                id={menuId}
                className="is-clickable inline-flex items-center relative [&_path]:hover:stroke-blue z-10"
                onClick={onSubMenuClick}
                type="button"
            >
                <LanguageIcon className="transition-colors" />
            </button>
            <AnimatePresence initial={false}>
                {activeSubId === menuId && (
                    <motion.div
                        id={menuId}
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
                        className="absolute top-[35px] -right-[50px] z-[5] min-w-[117px] rounded-lg bg-white py-2 shadow-md"
                    >
                        <ul className="relative before:absolute before:-top-[11px] before:right-[53px] before:rotate-45 before:w-3 before:h-3 before:bg-white z-[5]">
                            {langList.map(({ id, title, icon: Icon }, i) => (
                                <li key={i}>
                                    <button
                                        id={id}
                                        className={`${
                                            langId === id ? 'text-blue' : 'text-black-dark'
                                        } relative rounded-lg flex items-center font-regular text-[15px] whitespace-nowrap w-full px-[15px] py-[7px] hover:bg-gray-100 transition z-10`}
                                        onClick={e => onSubMenuItemClick(e, id)}
                                    >
                                        <Icon />
                                        <span className="ml-[10px] uppercase">{title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

LanguageMenu.propTypes = {
    langList: PropTypes.arrayOf(PropTypes.object),
    menuId: PropTypes.string.isRequired,
};

export default memo(LanguageMenu);
