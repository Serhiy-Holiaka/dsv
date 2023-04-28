import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import HeroSecondary from '@/components/blocks/hero-secondary';
import TabsPane from '@/components/tabs-pane';
import heroImage from '@/assets/images/solutions/our-solutions-hero.webp';
import sectionOneImg from '@/assets/images/solutions/case-study.webp';
import Button from '@/components/ui/button';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';
import OptionCard from '@/components/cards/option-card';
import ServiceCard from '@/components/cards/service-card';
import CardsSwiper from '@/components/cards-swiper';
import { OPTIONS_LIST, SERVICES_LIST } from '@/constants/solutions.constants';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';
import industryImgR from '@/assets/images/solutions/industry-1.webp';
import industryImgL from '@/assets/images/solutions/industry-2.webp';
import NewsCard from '@/components/cards-swiper/news-card';
import { BENEFITS_LIST } from '@/constants/home.constants';

const OurSolutions = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="Our solutions"
                description="Innovative, reliable and tailored solutions, whenever and wherever needed"
                breadCrumb="Our solutions"
            />
            <TabsPane />
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark mb-12">
                    Explore your options
                </h5>
                <div className="container max-w-mid grid grid-cols-4 gap-7">
                    {OPTIONS_LIST.map(({ imgSrc, title, description }, i) => (
                        <OptionCard key={i} imgSrc={imgSrc} title={title} description={description} />
                    ))}
                </div>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center max-w-[770px] mx-auto mb-16">
                    Whatever your industry, we are your global freight forwarder
                </h5>
                <CardsSwiper>
                    {BENEFITS_LIST.map(({ icon: Icon, title, descr }, i) => (
                        <SwiperSlide className="h-auto" key={i}>
                            <NewsCard icon={<Icon />} title={title} descr={descr} />
                        </SwiperSlide>
                    ))}
                </CardsSwiper>
                <h6 className="font-bold text-2xl text-black-dark text-center mb-8 mt-16">In a different industry?</h6>
                <Button additionalClasses="mx-auto">Show more news</Button>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark max-w-[770px] mx-auto mb-12">
                    Whatever your industry, we are your global freight forwarder
                </h5>
                <div className="container max-w-mid grid grid-cols-2 gap-7">
                    <div>
                        <div className="relative h-[320px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={320}
                                src={industryImgL}
                                alt="card image"
                            />
                        </div>
                        <h6 className="font-bold text-2xl text-black-dark my-4">Lead logistics</h6>
                        <p className="font-regular text-lg text-black-dark/70 mb-4">
                            Harness the best intelligence gathering technology and data processing software ever made;
                            and combine them with over 40 years of industry experience in enhancing our customers
                            operations and profitability.
                        </p>
                        <div>
                            <Link className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]">
                                <span className="mr-2">Enable intelligent supply chain</span>
                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="relative h-[320px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={320}
                                src={industryImgR}
                                alt="card image"
                            />
                        </div>
                        <h6 className="font-bold text-2xl text-black-dark my-4">Supply chain optimisation</h6>
                        <p className="font-regular text-lg text-black-dark/70 mb-4">
                            Are your supply chains working for or against your business goals? Resilient supply chains
                            for the real world.
                        </p>
                        <div>
                            <Link className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]">
                                <span className="mr-2">How to start optimising your supply chain</span>
                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark mb-8">
                    Value-added services
                </h5>
                <p className="font-regular text-lg text-center text-black-dark/70 mb-12">
                    Let us complete your logistic experience
                </p>
                <div className="container max-w-mid grid grid-cols-3 gap-7">
                    {SERVICES_LIST.map(({ imgSrc, title, description }, i) => (
                        <ServiceCard key={i} imgSrc={imgSrc} title={title} description={description} />
                    ))}
                </div>
            </section>
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
                        <p className="font-bold text-base text-black-dark/70 leading-none uppercase">CASE STUDY</p>
                        <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mt-8">Dream big</h5>
                        <p className="font-regular text-lg text-black-dark my-8">
                            Helping start-ups is one of DSV&#39;s specialities. We used our expertise to help snack bar
                            company, RAWBITE grow and expand globally.
                        </p>
                        <div>
                            <Button>See Rawbite’s story</Button>
                        </div>
                    </div>
                </div>
            </section>
            <AnyQuestions
                question="Any questions?"
                description="The people at DSV listen to our dreams and help us turn them into reality. It's a relationship worth an incredible amount, at all levels"
                buttonName="Contact us online"
                imgSrc={questionsImg}
            />
        </>
    );
};

export default OurSolutions;
