import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = () => {
    const [clickable, setClickable] = useState();

    const hide = () => {
        const time = 1000;
        setTimeout(
            () =>
                clickable.map(block => {
                    block.className = block.className.replace(' active-clickable', '');
                }),
            time
        );
    };

    useEffect(() => {
        const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
        setClickable(allWithClass);
    }, []);

    const onGlobalClick = e => {
        if (e.target.className.includes('is-clickable')) {
            return;
        } else {
            clickable.map(block => {
                block.className.includes('active-clickable')
                    ? (block.className += '')
                    : (block.className += ' active-clickable');
            });
        }
        hide();
    };

    return (
        <div onClick={onGlobalClick}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
