import { memo } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '@/components/ui/icons/LogoIcon';
import { ONLINE_TOOLS, OUR_SOLUTIONS, MENU, FOLLOW_US } from '@/constants/footer.constants';

const Footer = () => {
    return (
        <section className="w-full bg-blue-dark py-16">
            <div className="container max-w-mid grid grid-cols-footer gap-[30px] text-white">
                <div className="flex flex-col">
                    <Link onClick={e => e.stopPropagation()} to="/">
                        <LogoIcon />
                    </Link>
                    <a
                        className="is-clickable font-medium text-[32px] max-w-fit mt-12 mb-6"
                        href="mailto:hello@dsv.com"
                    >
                        Hello@dsv.com
                    </a>
                    <a className="is-clickable font-medium text-[32px] max-w-fit mb-12" href="tel:+33142967000">
                        +33 1 42 96 70 00
                    </a>
                    <p className="font-light text-sm">© DSV - All rights reserved</p>
                </div>
                <div>
                    <h4 className="font-medium text-xl leading-none mb-4">Online Tools</h4>
                    <ul className="flex flex-col">
                        {ONLINE_TOOLS.map((item, i) => (
                            <li key={i} className="flex mb-4 last:mr-0">
                                <Link
                                    className={`is-clickable font-regular text-[15px] ${item.length > 18 ? 'leading-[130%]' : 'leading-none'} hover:underline hover:underline-offset-4 transition`}
                                    to="/"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-xl leading-none mb-4">Our Solutions</h4>
                    <ul className="flex flex-col">
                        {OUR_SOLUTIONS.map((item, i) => (
                            <li key={i} className="flex mb-4 last:mr-0">
                                <Link
                                    className="is-clickable font-regular text-[15px] leading-none hover:underline hover:underline-offset-4 transition"
                                    to="/"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-xl leading-none mb-4">DSV</h4>
                    <ul className="flex flex-col">
                        {MENU.map(({ title, href }, i) => (
                            <li key={i} className="flex mb-4 last:mr-0">
                                <Link
                                    className="is-clickable font-regular text-[15px] leading-none hover:underline hover:underline-offset-4 transition"
                                    to={href}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-xl leading-none mb-4">Follow Us</h4>
                    <ul className="flex flex-col">
                        {FOLLOW_US.map(({ title, icon: Icon, href }, i) => (
                            <li key={i} className="flex mb-4 last:mr-0">
                                <a
                                    className="is-clickable flex items-center"
                                    target="_blank"
                                    href={href}
                                    rel="noopener noreferrer nofollow noindex"
                                >
                                    <Icon />
                                    <span className="font-regular text-[15px] leading-none ml-[10px]">{title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default memo(Footer);
