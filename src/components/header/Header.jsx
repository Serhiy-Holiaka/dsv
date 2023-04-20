import { useState } from 'react';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import SearchButton from '@/components/ui/search-button';
import { Link } from 'react-router-dom';
import MenuLink from '@/components/menu/MenuLink/MenuLink';
import { MenuProvider } from '@/context/MenuContext';
import LanguageMenu from '@/components/menu/LanguageMenu';
import Login from '@/components/login';

const Header = () => {
    const [activeSubId, setActiveSubId] = useState('');
    const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

    return (
        <MenuProvider
            isMobMenuOpen={isMobMenuOpen}
            setIsMobMenuOpen={setIsMobMenuOpen}
            activeSubId={activeSubId}
            setActiveSubId={setActiveSubId}
        >
            <div className="absolute left-2/4 -translate-x-[50%] top-0 w-full max-w-[1800px] py-5 px-4 z-[4]">
                <nav className="relative grid grid-cols-nav w-full -z-[1]">
                    <div
                        onClick={e => {
                            e.stopPropagation();
                            setActiveSubId('');
                            setIsMobMenuOpen(false);
                        }}
                        className={`${
                            activeSubId === '' && !isMobMenuOpen ? 'invisible' : 'visible'
                        } fixed top-0 left-0 right-0 bottom-0 h-screen z-[4]`}
                    />
                    <div className="flex items-center [&>*]:mr-8 last:[&>*]:mr-0">
                        <MenuLink href="/why-dsv" id="1">
                            Why DSV
                        </MenuLink>
                        <MenuLink href="/solutions" id="2">
                            Our solutions
                        </MenuLink>
                        <MenuLink href="/insights" id="3">
                            Insights
                        </MenuLink>
                        <MenuLink href="/sustainabillity" id="4">
                            Sustainabillity | ESG
                        </MenuLink>
                    </div>

                    <Link onClick={e => e.stopPropagation()} to="/">
                        <LogoIcon />
                    </Link>
                    <div className="flex items-center justify-end [&>*]:mr-8 last:[&>*]:mr-0">
                        <MenuLink href="/careers" id="5">
                            Careers
                        </MenuLink>
                        <MenuLink href="/about" id="6">
                            About DSV
                        </MenuLink>
                        <MenuLink href="/support" id="7">
                            Support
                        </MenuLink>
                        <SearchButton menuId="search" />
                        <LanguageMenu menuId="langTop" />
                        <Login menuId="login" />
                    </div>
                </nav>
            </div>
        </MenuProvider>
    );
};

export default Header;
