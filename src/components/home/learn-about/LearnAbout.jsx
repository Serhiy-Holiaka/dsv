import { Link } from 'react-router-dom';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';

const LearnAbout = () => {
    return (
        <div className="container max-w-mid grid grid-cols-4 gap-8">
            <div className="min-h-[357px] border border-gray-light rounded-2xl overflow-hidden [&_img]:hover:scale-105 [&_svg]:hover:translate-x-[6px] hover:shadow-md transition">
                <div className="relative h-[200px] overflow-hidden">
                    <img
                        className="absolute w-full h-full object-cover transition-transform duration-300"
                        width={268}
                        src="/src/assets/images/about/about-img-1.webp"
                        alt="card img"
                    />
                </div>
                <div className="px-5 py-6">
                    <h6 className="font-bold text-2xl text-black-dark mb-6">Advisories</h6>
                    <Link className="font-bold text-base leading-none flex justify-between items-center">
                        <span>Read our latest advisors</span>
                        <ArrowIcon className="w-5 h-5 -rotate-90 mr-[3px] [&>path]:stroke-black-dark transition" />
                    </Link>
                </div>
            </div>
            <div className="min-h-[357px] border border-gray-light rounded-2xl overflow-hidden [&_img]:hover:scale-105 [&_svg]:hover:translate-x-[6px] hover:shadow-md transition">
                <div className="relative h-[200px] overflow-hidden">
                    <img
                        className="absolute w-full h-full object-cover transition-transform duration-300"
                        width={268}
                        src="/src/assets/images/about/about-img-2.webp"
                        alt="card img"
                    />
                </div>
                <div className="px-5 py-6">
                    <h6 className="font-bold text-2xl text-black-dark mb-6">Expert opinions</h6>
                    <Link className="font-bold text-base leading-none flex justify-between items-center">
                        <span>Learn from our experts</span>
                        <ArrowIcon className="w-5 h-5 -rotate-90 mr-[3px] [&>path]:stroke-black-dark transition" />
                    </Link>
                </div>
            </div>
            <div className="min-h-[357px] border border-gray-light rounded-2xl overflow-hidden [&_img]:hover:scale-105 [&_svg]:hover:translate-x-[6px] hover:shadow-md transition">
                <div className="relative h-[200px] overflow-hidden">
                    <img
                        className="absolute w-full h-full object-cover transition-transform duration-300"
                        width={268}
                        src="/src/assets/images/about/about-img-3.webp"
                        alt="card img"
                    />
                </div>
                <div className="px-5 py-6">
                    <h6 className="font-bold text-2xl text-black-dark mb-6">Sace studies</h6>
                    <Link className="font-bold text-base leading-none flex justify-between items-center">
                        <span>See how we help our customers</span>
                        <ArrowIcon className="w-5 h-5 -rotate-90 mr-[3px] [&>path]:stroke-black-dark transition" />
                    </Link>
                </div>
            </div>
            <div className="min-h-[357px] border border-gray-light rounded-2xl overflow-hidden [&_img]:hover:scale-105 [&_svg]:hover:translate-x-[6px] hover:shadow-md transition">
                <div className="relative h-[200px] overflow-hidden">
                    <img
                        className="absolute w-full h-full object-cover transition-transform duration-300"
                        width={268}
                        src="/src/assets/images/about/about-img-4.webp"
                        alt="card img"
                    />
                </div>
                <div className="px-5 py-6">
                    <h6 className="font-bold text-2xl text-black-dark mb-6">Industry studies</h6>
                    <Link className="font-bold text-base leading-none flex justify-between items-center">
                        <span>Learn how we have supported various industry needs</span>
                        <ArrowIcon className="w-5 h-5 min-w-[1.25rem] -rotate-90 mr-[3px] [&>path]:stroke-black-dark transition" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LearnAbout;
