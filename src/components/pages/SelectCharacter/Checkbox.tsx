export const Checkbox = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="3" width="36" height="36" rx="18" fill="white" />
      <g filter="url(#filter0_d_77_9788)">
        <circle cx="25" cy="21" r="13" fill="#FDDD18" />
      </g>
      <path
        d="M19 20.7368L22.1156 24.1804C22.5126 24.6192 23.2017 24.6192 23.5987 24.1804L31 16"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_d_77_9788"
          x="0"
          y="0"
          width="50"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.992157 0 0 0 0 0.866667 0 0 0 0 0.0941176 0 0 0 0.48 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_77_9788"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_77_9788"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
