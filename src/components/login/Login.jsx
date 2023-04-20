import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuContext';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/form/input';
import Button from '@/components/ui/button';
import ManIcon from '@/components/ui/icons/ManIcon';

const Login = ({ menuId }) => {
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
                <ManIcon
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
                        className="absolute top-[35px] -right-[10px] z-[5] w-[490px] rounded-lg py-7 px-7 bg-white shadow-md"
                    >
                        <div className="relativew-0 h-0 before:absolute before:-top-[3px] before:right-[13px] before:rotate-45 before:w-3 before:h-3 before:bg-white" />
                        <h6 className="font-bold text-2xl text-black-dark text-center mb-6">Login</h6>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
                            <div className="mb-6">
                                <Input
                                    id="login"
                                    placeholder="Login"
                                    error={errors.login ? true : false}
                                    helperText={errors.login && 'Field is required!'}
                                    {...register('login', { required: true })}
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    error={errors.password ? true : false}
                                    helperText={errors.password && 'Field is required!'}
                                    {...register('password', { required: true })}
                                />
                            </div>
                            <Button type="submit" additionalClasses="w-full">Login</Button>
                        </form>
                        <Link className="block font-regular text-center text-gray my-6">Forget password?</Link>
                        <h6 className="font-bold text-2xl text-black-dark text-center mb-6">Dont have an account?</h6>
                        <Button additionalClasses="w-full">Sigh Up</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

Login.propTypes = {
    menuId: PropTypes.string.isRequired,
};

export default Login;
