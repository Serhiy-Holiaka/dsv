import { Link } from 'react-router-dom';
import HeroSecondary from '@/components/blocks/hero-secondary';
import TabsPane from '@/components/tabs-pane';
import heroImage from '@/assets/images/why-dsv/why-dsv-hero.webp';
import imageOne from '@/assets/images/why-dsv/why-dsv-1.webp';
import imageTwo from '@/assets/images/why-dsv/why-dsv-2.webp';
import imageThree from '@/assets/images/why-dsv/why-dsv-3.webp';
import imageFour from '@/assets/images/why-dsv/why-dsv-4.webp';
import imageFive from '@/assets/images/why-dsv/why-dsv-5.webp';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';
import cardImgOne from '@/assets/images/why-dsv/dvs-card-1.webp';
import cardImgTwo from '@/assets/images/why-dsv/dvs-card-2.webp';
import cardImgThree from '@/assets/images/why-dsv/dvs-card-3.webp';
import sectionOneImg from '@/assets/images/home-section-one.webp';
import Button from '@/components/ui/button';
import Numbers from '@/components/blocks/numbers';
import AnyQuestions from '@/components/blocks/any-questions';
import questionsImg from '@/assets/images/questions-men-1.webp';

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
            <section className="py-16">
                <h5 className="font-bold text-[42px] leading-[130%] text-center text-black-dark mb-12">
                    Reliability is key in a strong partnership
                </h5>
                <div className="container max-w-mid grid grid-cols-3 gap-7">
                    <div>
                        <div className="relative h-[325px]">
                            <img width={370} height={325} src={cardImgOne} alt="card image" />
                        </div>
                        <h6 className="font-bold text-2xl text-black-dark my-4">Experience</h6>
                        <p className="font-regular text-lg text-black-dark mb-4">
                            With a strong heritage and years of experience, we have gained a high level of expertise and
                            experience in providing solutions to complex supply chain challenges. We are freight
                            forwarders, and we know your industry and business by heart.
                        </p>
                        <div>
                            <Link className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]">
                                <span className="mr-2">Get to know our history</span>
                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="relative h-[325px]">
                            <img width={370} height={325} src={cardImgTwo} alt="card image" />
                        </div>
                        <h6 className="font-bold text-2xl text-black-dark my-4">Global network</h6>
                        <p className="font-regular text-lg text-black-dark mb-4">
                            DSV is a global business, but always remains close to the local market. Working with
                            container carriers, airlines, road hauliers and railway operators, we can move goods to
                            wherever they are needed. As one of the largest buyers globally we are able to combine
                            competative pricing and strong, long-standing relationships with carriers.
                        </p>
                        <div>
                            <Link className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]">
                                <span className="mr-2">Learn about our local empowerment</span>
                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="relative h-[325px] rounded-2xl overflow-hidden">
                            <img width={370} height={325} src={cardImgThree} alt="card image" />
                        </div>
                        <h6 className="font-bold text-2xl text-black-dark my-4">Flexibility and visibility</h6>
                        <p className="font-regular text-lg text-black-dark mb-4">
                            We provide greener and more efficient transport solutions through better planning, new
                            technologies and innovative solutions. Our highly digitalised operation gives us competitive
                            advantage. We integrate many of our IT systems with both customers and suppliers.
                        </p>
                        <div>
                            <Link className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]">
                                <span className="mr-2">Read about our connectivity solutions</span>
                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container max-w-mid grid grid-cols-2 gap-7">
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
                        <h5 className="font-bold text-[42px] leading-[130%] text-black-dark mb-8">
                            Keeping supply chains flowing
                        </h5>
                        <p className="text-lg leading-[150%] text-black-dark/70 mb-4">
                            Supporting customers within constantly changing markets requires DSV to be agile in order to
                            respond to market conditions. That is why our asset-light business model is essential to the
                            success of your business. We ship freight by{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">land</span>,{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">sea</span>,{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">rail</span> and{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">air</span>, as
                            well as providing{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                contract logistics
                            </span>
                            . From shipper to consignee, our business model keeps the entire supply chain flowing. We
                            also provide our customers with a full range of logistics and distribution services,
                            including digital tools for{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                purchase order management
                            </span>
                            , <span className="text-blue/70 cursor-pointer underline underline-offset-4">booking</span>{' '}
                            and track-and-trace,{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                green logistics
                            </span>
                            , cargo consolidation,{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">insurance</span>,{' '}
                            <span className="text-blue/70 cursor-pointer underline underline-offset-4">
                                customs clearance
                            </span>{' '}
                            and pick-and-pack.
                        </p>
                        <div>
                            <Link className="font-bold text-base leading-none inline-flex items-center [&_svg]:hover:translate-x-[3px]">
                                <span className="mr-2">Explore your options by visiting our solutions</span>
                                <ArrowIcon className="w-4 h-4 min-w-[1rem] -rotate-90 [&>path]:stroke-black-dark transition" />
                            </Link>
                        </div>
                    </div>
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

export default WhyDsv;
