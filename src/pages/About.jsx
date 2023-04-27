import HeroSecondary from '@/components/blocks/hero-secondary';
import heroImage from '@/assets/images/careers-hero.webp';
import Numbers from '@/components/blocks/numbers';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';
import SocialResponsIcon from '@/components/ui/icons/SocialResponsIcon';
import ResposibilityIcon from '@/components/ui/icons/ResposibilityIcon';
import BuildingIcon from '@/components/ui/icons/BuildingIcon';
import BookIcon from '@/components/ui/icons/BookIcon';
import Button from '@/components/ui/button';
import imageOne from '@/assets/images/about/about-dsv-1.webp';
import imageTwo from '@/assets/images/about/about-dsv-2.webp';
import imageThree from '@/assets/images/about/about-dsv-3.webp';
import LearnAbout from '@/components/home/learn-about';
import { ABOUT_LIST } from '@/constants/home.constants';

const About = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="About DSV"
                description="Global Transport and Logistics"
                breadCrumb="About DSV"
            />
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark max-w-[770px] mx-auto mb-8">
                    DSV provides and manages supply chain solutions for thousands of companies every day.
                </h5>
                <p className="font-regular text-lg text-center text-black-dark/70 mb-12">
                    Keeping supply chains flowing in a world of change
                </p>
                <div className="container max-w-max grid grid-cols-4 gap-7 px-5 xl:px-[75px]">
                    <div className="flex flex-col items-center">
                        <SocialResponsIcon />
                        <h5 className="font-bold text-2xl text-center text-black-dark mt-8">Corporate responsibility</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <ResposibilityIcon />
                        <h5 className="font-bold text-2xl text-center text-black-dark mt-8">Values</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <BuildingIcon />
                        <h5 className="font-bold text-2xl text-center text-black-dark mt-8">Company structure</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <BookIcon />
                        <h5 className="font-bold text-2xl text-center text-black-dark mt-8">History</h5>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container max-w-mid grid gap-32">
                    <div className="grid grid-cols-2 gap-7">
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark">
                                Vision and strategy
                            </h5>
                            <p className="font-regular text-lg text-black-dark my-8">
                                We want to be a leading global supplier, fulfilling customer needs for transport and
                                logistics services, targeting extensive growth and being among the most profitable in
                                our industry.
                            </p>
                            <div>
                                <Button>Read more</Button>
                            </div>
                        </div>
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={500}
                                src={imageOne}
                                alt="why DSV image"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={500}
                                src={imageTwo}
                                alt="why DSV image"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">
                                Meet DSV management and our Board of Directors
                            </h5>
                            <div>
                                <Button>See more</Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark">The DSV history</h5>
                            <p className="font-regular text-lg text-black-dark my-8">
                                In 1976, in the small town of Skuldelev in Denmark, ten owner-operated hauliers joined
                                forces and founded DSV.
                            </p>
                            <div>
                                <Button>Learn more</Button>
                            </div>
                        </div>
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={500}
                                src={imageThree}
                                alt="why DSV image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark mb-12">
                    Supply chain trends shaping our industry
                </h5>
                <LearnAbout itemsList={ABOUT_LIST} />
            </section>
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

export default About;
