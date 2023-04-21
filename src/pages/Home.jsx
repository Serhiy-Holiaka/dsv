import HomeHero from '@/components/home/home-hero';
import TabsPane from '@/components/tabs-pane';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';
import Numbers from '@/components/blocks/numbers';
import LearnAbout from '@/components/home/learn-about';
import sectionOneImg from '@/assets/images/home-section-one.webp';
import Button from '@/components/ui/button';
import { SELF_SERVICES } from '@/constants/home.constants';

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
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center">Self service</h5>
                <p className="font-regular text-lg text-black-dark/70 text-center mt-8 mb-16">
                    Keeping supply chains flowing in a world of change
                </p>
                <div className="container max-w-max grid grid-cols-4 gap-x-[30px] gap-y-[59px]">
                    {SELF_SERVICES.map(({ icon: Icon, title }, i) => (
                        <div key={i} className="flex flex-col justify-center items-center">
                            <Icon />
                            <h6 className="font-bold text-2xl text-black-dark mb-6 mt-8">{title}</h6>
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
