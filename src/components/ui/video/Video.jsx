import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PlayIcon from '@/components/ui/icons/PlayIcon';
import PauseIcon from '@/components/ui/icons/PauseIcon';

const Video = ({ sourcesList, ...rest }) => {
    const [isPlay, steIsPlay] = useState(false);
    const videoRef = useRef(null);

    const handlePlayStop = e => {
        e.stopPropagation();
        if (videoRef.current.paused) {
            videoRef.current.play();
            steIsPlay(true);
        } else {
            videoRef.current.pause();
            steIsPlay(false);
        }
    };

    return (
        <div
            className={`relative w-full h-full ${
                isPlay
                    ? '[&>button]:invisible [&>button]:opacity-0 [&>button]:hover:visible [&>button]:hover:opacity-100 [&>p]:invisible [&>p]:opacity-0 [&>p]:hover:visible [&>p]:hover:opacity-100'
                    : '[&>button]:visible [&>button]:opacity-100 [&>p]:visible [&>p]:opacity-100'
            }`}
        >
            <video
                ref={videoRef}
                preload="metadata"
                onClick={handlePlayStop}
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover rounded-2xl"
                {...rest}
            >
                {sourcesList && sourcesList.map((item, i) => <source key={i} src={item.src} type={item.type} />)}
                Your browser is not suported!
            </video>
            <div onClick={handlePlayStop} className="absolute w-full h-full bg-gradient-to-b from-black-dark/90 from-0% to-black-dark/10 to-50% z-[2]" />
            <button
                className="absolute bottom-[102px] -right-[65px] flex items-center justify-center w-[128px] h-[128px] border border-blue rounded-full hover:border-white [&_svg]:hover:scale-110 [&_svg]:active:scale-100 transition duration-150 z-[3]"
                onClick={handlePlayStop}
            >
                {isPlay ? (
                    <PauseIcon className="w-6 h-6 transition-transform duration-150" />
                ) : (
                    <PlayIcon className="w-4 h-4 transition-transform duration-150" />
                )}
            </button>
            <p className="absolute hidden xl:block bottom-[152px] -right-[175px] w-[88px] font-bold text-base text-white transition duration-150 z-[3]">{isPlay ? 'Pause video' : 'Play video'}</p>
        </div>
    );
};

Video.propTypes = {
    sourcesList: PropTypes.arrayOf(PropTypes.object),
};

export default Video;
