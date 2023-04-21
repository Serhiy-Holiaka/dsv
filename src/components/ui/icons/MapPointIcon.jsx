const MapPointIcon = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 96 96" fill="none" {...props}>
        <path
            stroke="#161616"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M70.957 32C73.265 27.613 75 23.364 75 20.5 75 11.94 68.06 5 59.5 5 50.94 5 44 11.94 44 20.5c0 3.05 1.967 7.67 4.5 12.356M70.957 32C66.364 40.727 59.5 50 59.5 50s-6.423-8.678-11-17.144M70.957 32 90.5 37.5v17m0 17.5v18l-31-10m0-20.5V80m0 0L32 90m0 0V68.5M32 90 5.5 80V63.5m0-18.5V26.5l26.5 12m0 0v21m0-21 16.5-5.644M68 20.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
        />
        <circle cx={5} cy={54} r={4} stroke="#387CFF" strokeWidth={2} />
        <circle cx={90} cy={63} r={4} stroke="#387CFF" strokeWidth={2} />
        <circle cx={5} cy={54} r={1} stroke="#387CFF" strokeWidth={2} />
        <circle cx={90} cy={63} r={1} stroke="#387CFF" strokeWidth={2} />
        <path
            stroke="#387CFF"
            strokeDasharray="5 5"
            strokeLinecap="round"
            strokeWidth={2}
            d="M85.5 62 59 54 32 64.5l-22.5-9"
        />
    </svg>
);

export default MapPointIcon;
