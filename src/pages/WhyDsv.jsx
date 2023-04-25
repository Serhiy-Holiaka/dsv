import HeroSecondary from '@/components/blocks/hero-secondary';
import TabsPane from '@/components/tabs-pane';
import heroImage from '@/assets/images/why-dsv/why-dsv-hero.webp';
import imageOne from '@/assets/images/why-dsv/why-dsv-1.webp';
import imageTwo from '@/assets/images/why-dsv/why-dsv-2.webp';
import imageThree from '@/assets/images/why-dsv/why-dsv-3.webp';
import imageFour from '@/assets/images/why-dsv/why-dsv-4.webp';
import imageFive from '@/assets/images/why-dsv/why-dsv-5.webp';
import Numbers from '@/components/blocks/numbers';

const WhyDsv = () => {
    return (
        <>
            <HeroSecondary
                imgSrc={heroImage}
                title="Why DSV?"
                description="A global network ready to help you achieve your business objectives"
                breadCrumb="Why DSV"
            />
            <TabsPane />
            <section className="py-16">
                <div className="container max-w-mid grid gap-32">
                    <div className="grid grid-cols-2 gap-7">
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">
                                Why DSV should be your transport and logistics company of choice
                            </h5>
                            <p className="text-lg leading-[150%] text-black-dark/70">
                                As a global freight forwarder, DSV provides and manages supply chain solutions for
                                thousands of companies every day. Whether you are a small family-run businesses or large
                                global corporation we focus on keeping your supply chains flowing through operational
                                excellence and sustainable growth. This is at the core of our{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    purpose, vision and mission.
                                </span>{' '}
                                Our skilled people with industry know-how, modern warehouses, strong carrier
                                relationships and a global network across 80 countries position us to better serve your
                                needs. We help you achieve your business objectives through a unique blend of optimised
                                and flexible solutions, combined with visibility tools,{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    secure IT infrastructure
                                </span>{' '}
                                and{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    sustainability.
                                </span>
                            </p>
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
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">Optimisation</h5>
                            <p className="text-lg leading-[150%] text-black-dark/70">
                                DSV provide optimised transportation and logistics solutions designed by our supply
                                chain experts, ensuring the right balance between costs, CO2 compensation, service
                                levels, lead times and risk. Our global network and strong partnerships provide you with
                                a carrier mix tailored to your needs. We ensure optimisation across all{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    modes of transport
                                </span>{' '}
                                through the insights of our local experts. In our{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    Customer Success Programme
                                </span>{' '}
                                we are mapping how customers experience our services to helps us identify our strengths
                                as well as areas for improvement.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">
                                Security and visibility
                            </h5>
                            <p className="text-lg leading-[150%] text-black-dark/70">
                                DSV provides secure IT infrastructure protected by cyber security measures and strong
                                digital solutions and interfaces across all transport modes. We provide real-time
                                end-to-end visibility and control at shipment and purchase order level enabled by our
                                track and trace and POMS{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    (Purchase Order Management Systems).
                                </span>{' '}
                                These dynamic and flexible solutions enable customers to manage complex logistics
                                solutions, increase supply chain efficiency and better manage inventory and costs. DSV’s
                                dedicated teams are always ready to support you and your business with additional
                                security.
                            </p>
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
                    <div className="grid grid-cols-2 gap-7">
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={500}
                                src={imageFour}
                                alt="why DSV image"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">Flexibility</h5>
                            <p className="text-lg leading-[150%] text-black-dark/70">
                                DSV has become experts at adapting to changing market conditions and providing flexible
                                solutions to meet your business needs. Our business model is asset light. This means we
                                can quickly scale activities to match changes in market demand. We can also pick the
                                best suppliers for any service depending on factors like{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    reliability,
                                </span>{' '}
                                available capacity, transit time, sustainability factors and price.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                        <div className="flex flex-col justify-center">
                            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">
                                Sustainability
                            </h5>
                            <p className="text-lg leading-[150%] text-black-dark/70">
                                As a leader in transport and logistics, DSV has an important role to play in helping the
                                industry transition to greener more environmentally friendly practices. We provide
                                sustainable and efficient transport solutions through better planning, new technologies
                                and innovative solutions. We work with sustainability across all areas of our business,
                                from air, sea and road freight to contract logistics.In order to{' '}
                                <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                    reduce your supply chain’s carbon footprint
                                </span>
                                , DSV also provides consolidation, shift in transportation modes, load optimisation,
                                container fill rates, and a global transportation network. With a team of industry
                                experts, we are ready to design sustainable solutions that help you achieve a greener
                                supply chain.
                            </p>
                        </div>
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute w-full h-full object-cover"
                                width={570}
                                height={500}
                                src={imageFive}
                                alt="why DSV image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Numbers />
        </>
    );
};

export default WhyDsv;
