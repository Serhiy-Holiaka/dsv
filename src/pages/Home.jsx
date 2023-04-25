import { Link } from 'react-router-dom';
import HomeHero from '@/components/home/home-hero';
import TabsPane from '@/components/tabs-pane';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';
import Numbers from '@/components/blocks/numbers';
import LearnAbout from '@/components/home/learn-about';
import sectionOneImg from '@/assets/images/home-section-one.webp';
import Button from '@/components/ui/button';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';
import CardsSwiper from '@/components/cards-swiper';
import TestimonialsSwiper from '@/components/testimonials-swiper';
import { SELF_SERVICES, LATEST_NEWS } from '@/constants/home.constants';

const Home = () => {
    return (
        <>
            <HomeHero />
            <TabsPane />
            <section className="pt-12 pb-16">
                <div className="container max-w-mid grid grid-cols-2 gap-8">
                    <div>
                        <div className="relative h-[420px] rounded-2xl overflow-hidden">
                            <img
                                width={570}
                                height={420}
                                className="absolute w-full h-full object-cover"
                                src={sectionOneImg}
                                alt="assistant photo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 className="font-bold text-[42px] leading-[130%] text-black-dark">
                            A special kind of drive
                        </h5>
                        <p className="font-regular text-lg text-black-dark my-8">
                            Keeping supply chains flowing in a world of change
                        </p>
                        <div>
                            <Button>Discover how</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center max-w-[770px] mx-auto">
                    Whatever your industry, we are your global freight forwarder
                </h5>
                <CardsSwiper />
                <h6 className="font-bold text-2xl text-black-dark text-center mb-8">In a different industry?</h6>
                <Button additionalClasses="mx-auto">Show more news</Button>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center">Self service</h5>
                <p className="font-regular text-lg text-black-dark/70 text-center mt-8 mb-16">
                    Keeping supply chains flowing in a world of change
                </p>
                <div className="container max-w-max grid grid-cols-4 gap-x-[30px] gap-y-[59px]">
                    {SELF_SERVICES.map(({ icon: Icon, title }, i) => (
                        <div key={i} className="flex flex-col justify-center items-center">
                            <Icon />
                            <h6 className="font-bold text-2xl text-center text-black-dark mb-6 mt-8">{title}</h6>
                        </div>
                    ))}
                </div>
                <Button additionalClasses="mx-auto mt-14">See our tailor-made solutions</Button>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center mb-16">Latest news</h5>
                <div className="container max-w-max grid xl:grid-cols-news gap-[30px]">
                    {LATEST_NEWS.map(({ imgSrc, date, title, descr, link }, i) => {
                        if (i === 0) {
                            return (
                                <div key={i} className="xl:col-start-1 row-span-3 flex flex-col">
                                    <div className="relative min-h-[395px] rounded-2xl overflow-hidden">
                                        <img
                                            className="absolute w-full h-full object-cover"
                                            width={720}
                                            src={imgSrc}
                                            alt="news img"
                                        />
                                    </div>
                                    <p className="font-medium text-[15px] text-gray my-6">{date}</p>
                                    <h6 className="font-bold text-2xl text-black-dark mb-6">{title}</h6>
                                    <p className="font-regular text-base leading-[150%] text-black-dark/70 mb-6">
                                        {descr}
                                    </p>
                                    <div>
                                        <Link
                                            to={link}
                                            className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]"
                                        >
                                            <span className="mr-2">Read more</span>
                                            <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={i} className="xl:col-start-2 grid grid-cols-news-card gap-[30px]">
                                    <div className="relative min-h-[190px] rounded-2xl overflow-hidden">
                                        <img
                                            className="absolute w-full h-full object-cover"
                                            width={270}
                                            src={imgSrc}
                                            alt="news img"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[15px] leading-[130%] text-gray mb-4">{date}</p>
                                        <h6 className="font-bold text-xl leading-[130%] text-black-dark mb-4">
                                            {title}
                                        </h6>
                                        <p className="font-regular text-base leading-[150%] text-black-dark/70 mb-4">
                                            {descr}
                                        </p>
                                        <div>
                                            <Link
                                                to={link}
                                                className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]"
                                            >
                                                <span className="mr-2">Read more</span>
                                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <Button additionalClasses="mx-auto mt-12">Show more news</Button>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center max-w-[770px] mx-auto">
                    What our customers say
                </h5>
                <TestimonialsSwiper />
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center">Self service</h5>
                <p className="font-regular text-lg text-black-dark/70 text-center mt-8 mb-16">
                    Keeping supply chains flowing in a world of change
                </p>
                <div className="container max-w-max grid grid-cols-4 gap-x-[30px] gap-y-[59px]">
                    {SELF_SERVICES.map(({ icon: Icon, title }, i) => (
                        <div key={i} className="flex flex-col justify-center items-center">
                            <Icon />
                            <h6 className="font-bold text-2xl text-center text-black-dark mb-6 mt-8">{title}</h6>
                        </div>
                    ))}
                </div>
                <Button additionalClasses="mx-auto mt-14">See our tailor-made solutions</Button>
            </section>
            <LearnAbout />
            <Numbers />
            <AnyQuestions
                question="Any questions?"
                description="The people at DSV listen to our dreams and help us turn them into reality. It's a relationship worth an incredible amount, at all levels"
                buttonName="Contact us online"
                imgSrc={questionsImg}
            />
        </>
    );
};

export default Home;
