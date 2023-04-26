import HeroSecondary from '@/components/blocks/hero-secondary';
import heroImage from '@/assets/images/sustainability-hero.webp';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-2.webp';
import imageOne from '@/assets/images/why-dsv/why-dsv-1.webp';
import TestimonialCard from '@/components/testimonials-swiper/testimanial-card';
import { SwiperSlide } from 'swiper/react';
import CardsSwiper from '@/components/cards-swiper';
import SustainCard from '@/components/cards-swiper/sustain-card';
import { BENEFITS_LIST } from '@/constants/sustainability.constants';
import Button from '@/components/ui/button';

const Sustainability = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="Sustainability | ESG"
                description="Towards a more sustainable future"
                breadCrumb="Sustainability | ESG"
            />
            <section className="py-16">
                <div className="container max-w-mid grid grid-cols-2 gap-7">
                    <div>
                        <h5 className="font-bold text-[42px] leading-[130%] text-black-dark">
                            Keeping supply chains flowing in a world of change
                        </h5>
                        <p className="font-bold text-xl leading-[130%] text-black-dark/70 my-8">
                            We believe world trade drives world prosperity, but it’s time we remodel the way we conduct
                            it to make it more sustainable
                        </p>
                        <p className="font-regular text-base leading-[150%] text-black-dark/70">
                            We acknowledge our role as part of the critical infrastructure driving world trade and as a
                            key enabler for the sustainable growth of all our stakeholders, including customers,
                            shareholders and societies at large. We work to provide greener and more efficient transport
                            solutions through better planning, new technologies and innovative solutions.As a top three
                            transport and logistics provider, DSV has a strong focus on ensuring responsible and
                            sustainable business practices everywhere we operate. Recognising our role in the industry,
                            we have raised our sustainability ambitions and committed to reaching net zero emissions
                            across our operations by 2050. We help our customers navigate complex supply chains and
                            introduce greater efficiency and sustainability within their operations. To achieve this, we
                            provide Green Logistics solutions. These range from CO2 reporting to strategic supply chain
                            optimisation and sustainable fuel offerings. Achieving our sustainability goals cannot be
                            realised alone. That’s why we work with customers, industry partners and stakeholders to
                            develop solutions that benefit both our planet and our business.
                        </p>
                    </div>
                    <div className="relative w-full h-[580px] rounded-2xl overflow-hidden">
                        <img
                            className="absolute w-full h-full object-cover"
                            width={570}
                            height={580}
                            src={imageOne}
                            alt="why DSV image"
                        />
                    </div>
                </div>
            </section>
            <section className="pb-16">
                <div className="container max-w-[970px] mx-auto">
                    <TestimonialCard
                        comment="The people at DSV listen to our dreams and help us turn them into reality. It's a relationship worth an incredible amount, at all levels"
                        name="Morten Fullerton, CEO of Rawbite"
                    />
                </div>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center max-w-[770px] mx-auto">
                    Read more about how we work with sustainability
                </h5>
                <p className="font-regular text-base leading-[150%] text-black-dark text-center max-w-[770px] mx-auto mt-8">
                    To turn our words into actions that can have an impact on our planet, we work with sustainability
                    across all areas of our business, from air, sea and road freight to contract logistic
                </p>
                <CardsSwiper>
                    {BENEFITS_LIST.map(({ icon: Icon, title, descr, linkName }, i) => (
                        <SwiperSlide className="h-auto" key={i}>
                            <SustainCard icon={<Icon />} title={title} descr={descr} linkName={linkName} />
                        </SwiperSlide>
                    ))}
                </CardsSwiper>
                <h6 className="font-bold text-2xl text-black-dark text-center max-w-[870px] mx-auto mb-8">
                    We continuously work with sustainability across all areas of our business, from air, sea and road
                    freight to contract logistics.
                </h6>
                <Button additionalClasses="mx-auto">Find out more in our latest Sustainability Report</Button>
            </section>
            <AnyQuestions
                question="Any questions?"
                description="Contact Martin Andreasen, Executive Vice President, Group Compliance"
                buttonName="Contact us ESG team"
                imgSrc={questionsImg}
            />
        </>
    );
};

export default Sustainability;
