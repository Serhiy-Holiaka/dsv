import { memo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';
import { useIsClient } from '@/hooks/useIsClient';
import 'swiper/css';
import 'swiper/css/navigation';

const CardsSwiper = ({ children }) => {
    const swiperRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const isClient = useIsClient();

    useEffect(() => {
        if (!isClient && !swiperRef.current) {
            return;
        }

        const { current } = swiperRef;

        current?.update();
    }, [isClient, swiperRef]);

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
                onUpdate={swiper => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                onSwiper={swiper => (swiperRef.current = swiper)}
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
                {children}
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

CardsSwiper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default memo(CardsSwiper);
