import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';
import { TESTIMONIALS_LIST } from '@/constants/home.constants';
import TestimonialCard from '@/components/testimonials-swiper/testimanial-card';
import 'swiper/css';
import 'swiper/css/scrollbar';

const TestimonialsSwiper = () => {
    return (
        <div className="mx-auto">
            <Swiper
                modules={[Scrollbar, A11y]}
                slidesPerView="auto"
                spaceBetween={100}
                initialSlide={1}
                centeredSlides={true}
                slideClass="swiper-slide"
                slideNextClass="swiper-slide-custom-next"
                slidePrevClass="swiper-slide-custom-prev"
                scrollbar={{
                    draggable: true,
                    dragClass: 'swiper-scrollbar-drag',
                    dragSize: 170,
                }}
                loop={false}
                className="h-full !py-16"
            >
                {TESTIMONIALS_LIST.map(({ comment, name }, i) => (
                    <SwiperSlide className="h-auto" key={i}>
                        <TestimonialCard comment={comment} name={name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default memo(TestimonialsSwiper);
