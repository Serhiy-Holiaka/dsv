import { memo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';
import NewsCard from '@/components/cards-swiper/news-card';
import { BENEFITS_LIST } from '@/constants/home.constants';
import 'swiper/css';
import 'swiper/css/navigation';

const CardsSwiper = () => {
    const swiperRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const onBeforeInit = Swiper => {
        if (typeof Swiper.params.navigation !== 'boolean') {
            const navigation = Swiper.params.navigation;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
        }
    };

    return (
        <div className="flex items-center px-5 xl:px-[75px] mx-auto">
            <div className="pr-4 xl:pr-[70px]">
                <button
                    ref={navigationPrevRef}
                    type="button"
                    className="is-clickable flex items-center justify-center w-20 h-20 rounded-full bg-black-dark hover:bg-black [&>svg]:hover:scale-110 transition"
                >
                    <ArrowIcon className="rotate-90 transition-transform duration-200" />
                </button>
            </div>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, A11y]}
                slidesPerView={3}
                spaceBetween={30}
                loop={false}
                onBeforeInit={onBeforeInit}
                breakpoints={{
                    1500: {
                        slidesPerView: 4,
                    },
                    1700: {
                        slidesPerView: 5,
                    },
                }}
                className="h-full py-16"
            >
                {BENEFITS_LIST.map(({ icon: Icon, title, descr }, i) => (
                    <SwiperSlide className="h-auto" key={i}>
                        <NewsCard icon={<Icon />} title={title} descr={descr} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="pl-4 xl:pl-[70px]">
                <button
                    ref={navigationNextRef}
                    className="is-clickable flex items-center justify-center w-20 h-20 rounded-full bg-black-dark hover:bg-black [&>svg]:hover:scale-110 transition"
                    type="button"
                >
                    <ArrowIcon className="-rotate-90 transition-transform duration-200" />
                </button>
            </div>
        </div>
    );
};

export default memo(CardsSwiper);
