import Button from '@/components/ui/button';
import Video from '@/components/ui/video';
import videoHero from '@/assets/video/hero-video.mp4';
import videoHeroPoster from '@/assets/video/hero-video-poster.webp';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';

const videos = [
    {
        src: videoHero,
        type: 'video/mp4',
    },
    {
        src: videoHero,
        type: 'video/mp4',
    },
];

const HomeHero = () => {
    return (
        <section className="relative bg-black-dark pt-[132px] min-h-[1128px]">
            <div className="relative max-w-[870px] mx-auto z-[2]">
                <h1 className="font-bold text-[96px] text-white leading-none text-center">
                    Connect your business with the world
                </h1>
                <p className="font-regular text-lg text-white text-opacity-70 text-center max-w-[490px] mx-auto py-8">
                    It doesn&#39;t matter if you run a global powerhouse or local startup. We&#39;re here to help your
                    business grow.
                </p>
                <Button additionalClasses="mx-auto">Explore our solutions</Button>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-32 w-full max-w-[80vw] xl:max-w-[61vw] h-[680px] z-[1]">
                <Video sourcesList={videos} poster={videoHeroPoster} loop />
            </div>
            <div className="absolute left-0 bottom-[20%] w-[119px] flex items-center rotate-90">
                <p className="font-regular text-white leading-none mr-4 -rotate-180">Scroll down</p>
                <ArrowIcon className="-rotate-90" />
            </div>
        </section>
    );
};

export default HomeHero;
