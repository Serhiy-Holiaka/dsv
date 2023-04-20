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
                    ? '[&>button]:invisible [&>button]:opacity-0 [&>button]:hover:visible [&>button]:hover:opacity-100'
                    : '[&>button]:visible [&>button]:opacity-100'
            }`}
        >
            <video
                ref={videoRef}
                preload="metadata"
                onClick={handlePlayStop}
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover"
                {...rest}
            >
                {sourcesList && sourcesList.map((item, i) => <source key={i} src={item.src} type={item.type} />)}
                Your browser is not suported!
            </video>
            <button
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[98px] h-[98px] rounded-full bg-black-dark/70 [&_svg]:hover:scale-110 [&_svg]:active:scale-100 transition duration-200"
                onClick={handlePlayStop}
            >
                {isPlay ? <PauseIcon className="w-7 h-7 transition-transform duration-200" /> : <PlayIcon className="transition-transform duration-200" />}
            </button>
        </div>
    );
};

Video.propTypes = {
    sourcesList: PropTypes.arrayOf(PropTypes.object),
};

export default Video;
