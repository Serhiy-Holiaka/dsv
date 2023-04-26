import HeroSecondary from '@/components/blocks/hero-secondary';
import heroImage from '@/assets/images/careers-hero.webp';
import Numbers from '@/components/blocks/numbers';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';

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
