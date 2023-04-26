import HeroSecondary from '@/components/blocks/hero-secondary';
import heroImage from '@/assets/images/insights-hero.webp';
import LearnAbout from '@/components/home/learn-about';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';

const Insights = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="Insights"
                description="Expert insights covering all aspects of the supply chain"
                breadCrumb="Insights"
            />
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark mb-8">
                    Supply chain trends shaping our industry
                </h5>
                <p className="font-regular text-lg text-center text-black-dark/70 max-w-[770px] mx-auto mb-12">
                    Through our advisories, DSV provides information and operational considerations related to global
                    disruptions impacting the industry. Our expert opinions offer blogs and insights on the latest
                    supply chain trends, and case studies illustrate DSV’s range of solutions to meet complex customer
                    requirements.
                </p>
                <LearnAbout />
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

export default Insights;
