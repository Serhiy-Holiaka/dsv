import HeroSecondary from '@/components/blocks/hero-secondary';
import TabsPane from '@/components/tabs-pane';
import heroImage from '@/assets/images/support-hero.webp';
import SupportStaffIcon from '@/components/ui/icons/SupportStaffIcon';
import QuestionIcon from '@/components/ui/icons/QuestionIcon';
import { SwiperSlide } from 'swiper/react';
import CardsSwiper from '@/components/cards-swiper';
import SupportCard from '@/components/cards-swiper/support-card';
import { SUPPORT_LIST } from '@/constants/support.constants';
import Button from '@/components/ui/button';
import supportImg from '@/assets/images/support.webp';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/form/input';

const Support = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // eslint-disable-next-line no-console
    const onSubmit = data => console.log(data);

    return (
        <>
            <HeroSecondary imgSrc={heroImage} title="Support" description="How can we help?" breadCrumb="Support" />
            <TabsPane />
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark max-w-[770px] mx-auto mb-16">
                    Can we help you with a quote or an answer to your question?
                </h5>
                <div className="container max-w-[870px] grid grid-cols-2 gap-7">
                    <div className="flex flex-col items-center">
                        <SupportStaffIcon />
                        <h5 className="font-bold text-2xl text-black-dark mt-8">Talk to Sales</h5>
                        <p className="font-regular text-base leading-[150%] text-center text-black-dark mt-4">
                            Interested in a spot or tariff quote? Send us your enquiry.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <QuestionIcon />
                        <h5 className="font-bold text-2xl text-black-dark mt-8">Help & Contact</h5>
                        <p className="font-regular text-base leading-[150%] text-center text-black-dark mt-4">
                            Need to know how to Track & Trace, log in to self services or have a question?
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center max-w-[770px] mx-auto mb-16">
                    Popular help topics
                </h5>
                <CardsSwiper>
                    {SUPPORT_LIST.map(({ title, descr }, i) => (
                        <SwiperSlide className="h-auto" key={i}>
                            <SupportCard title={title} descr={descr} />
                        </SwiperSlide>
                    ))}
                </CardsSwiper>
                <h6 className="font-bold text-2xl text-black-dark text-center mb-8 mt-16">Do you have other questions?</h6>
                <Button additionalClasses="mx-auto">Read our FAQs</Button>
            </section>
            <section className="py-16">
                <div className="container max-w-mid grid grid-cols-2 gap-7">
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                        <img
                            className="absolute w-full h-full object-cover"
                            width={570}
                            height={500}
                            src={supportImg}
                            alt="why DSV image"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 className="font-bold text-[42px] leading-[130%] text-black-dark">
                            Didn&#39;t find the answer to your question?
                        </h5>
                        <p className="font-regular text-lg text-black-dark my-8">
                            Send us your question. We will send a copy of your enquiry to your email address.
                        </p>
                        <div>
                            <Button>Send us your question</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[url('@/assets/images/world-map-light.webp')] bg-no-repeat bg-center bg-contain bg-black-dark">
                <div className="container flex flex-col justify-center max-w-[770px] min-h-[477px] mx-auto">
                    <h4 className="font-bold text-xl text-white text-center">FIND US</h4>
                    <h3 className="font-bold text-[42px] leading-[130%] text-white text-center mt-4 mb-12">
                        Global DSV finder
                    </h3>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
                            <div className="flex">
                                <Input
                                    id="search"
                                    placeholder="Country, region, city, post code, code or address"
                                    error={errors.search ? true : false}
                                    helperText={errors.search && 'Field is required!'}
                                    additionalClasses="[&>input]:h-[52px] [&>input]:rounded-r-none"
                                    {...register('search', { required: true })}
                                />
                                <Button type="submit" additionalClasses="rounded-l-none min-w-[170px]">Find office</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Support;
