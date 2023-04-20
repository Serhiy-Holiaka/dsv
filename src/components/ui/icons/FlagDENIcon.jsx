const FlagDENIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} viewBox="0 0 24 16" fill="none" {...props}>
            <g clipPath="url(#a)">
                <path fill="#C60C30" d="M0 0h24v16H0V0Z" />
                <path fill="#fff" d="M8.889 0H6.082v6.55H0v2.807h6.082V16h2.807V9.357H24V6.55H8.889V0Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default FlagDENIcon;
