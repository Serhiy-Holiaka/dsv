const LanguageIcon = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
        <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} clipPath="url(#a)">
            <path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM1.667 10h16.666" />
            <path d="M10 1.667A12.75 12.75 0 0 1 13.333 10 12.75 12.75 0 0 1 10 18.333 12.75 12.75 0 0 1 6.667 10 12.75 12.75 0 0 1 10 1.667v0Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default LanguageIcon;
