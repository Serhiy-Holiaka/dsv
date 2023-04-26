import HeroSecondary from '@/components/blocks/hero-secondary';
import heroImage from '@/assets/images/careers-hero.webp';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-3.webp';
import ServiceCard from '@/components/cards/service-card';
import { CAREERS_LIST } from '@/constants/careers.contants';

const Careers = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="Careers"
                description="Come join us in global transport and logistics"
                breadCrumb="Careers"
            />
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark mb-8">
                    Forward your career at DSV
                </h5>
                <p className="font-regular text-lg text-center text-black-dark/70 max-w-[770px] mx-auto mb-12">
                    Find out more about the different jobs we offer, and what makes us a great place to work
                </p>
                <div className="container max-w-mid flex flex-wrap justify-center gap-7">
                    {CAREERS_LIST.map(({ imgSrc, title, description, linkName }, i) => (
                        <div key={i} className="w-full max-w-[370px] min-w-[300px]">
                            <ServiceCard
                                imgSrc={imgSrc}
                                title={title}
                                description={description}
                                linkName={linkName}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <AnyQuestions
                question="Do you want to work for DSV?"
                description={
                    <>
                        Check your local country for vacancies.
                        <br />
                        <br />
                        Helle Bach, Executive Vice President, Group HR
                    </>
                }
                buttonName="Find local vacanciies"
                imgSrc={questionsImg}
            />
        </>
    );
};

export default Careers;
