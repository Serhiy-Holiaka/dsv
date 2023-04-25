import HeroSecondary from '@/components/blocks/hero-secondary';
import TabsPane from '@/components/tabs-pane';
import heroImage from '@/assets/images/solutions/our-solutions-hero.webp';
import sectionOneImg from '@/assets/images/solutions/case-study.webp';
import Button from '@/components/ui/button';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';

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
