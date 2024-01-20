export default function ExploreButton({onClick}){
    return(
        <button onClick={onClick} className="Explore-Button">
            <span className="IconContainer">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 156 78"
            className="telescope"
            >
            <path
                fill="url(#paint0_linear_131_19)"
                d="M10.3968 78C10.6002 78 32 72.831 32 72.831C29.5031 68.7434 27.3945 63.5193 26.0258 57.947C24.6386 52.3381 24.0837 46.7841 24.3982 42L3.38683 47.0957C0.0205717 47.9206 -1.0152 55.4725 1.09333 63.9959C3.05409 72.0061 7.10469 78 10.3968 78Z"
            ></path>
            <path
                fill="url(#paint1_linear_131_19)"
                d="M63.0824 25L34.8099 32.0351C33.7675 32.2957 32.8714 33.0215 32.1582 34.1382C31.6096 34.9943 31.1524 36.0738 30.8049 37.3393C30.5489 38.2513 30.366 39.2563 30.238 40.3544C29.6894 44.7839 30.0734 50.5348 31.5547 56.6207C33.0177 62.7067 35.2854 67.9925 37.7725 71.6587C38.3942 72.5707 39.016 73.371 39.6561 74.0596C40.5339 75.0274 41.43 75.7718 42.3078 76.2743C43.1307 76.7396 43.9536 77 44.74 77C45.0326 77 45.3252 76.9628 45.5995 76.8883L72.5919 70.1698L74 69.8164C69.867 64.1027 66.6484 56.1184 64.7282 48.1527C62.7532 39.9451 62.1497 31.8306 63.0094 25.3166C63.0458 25.2233 63.0643 25.1117 63.0824 25Z"
            ></path>
            <path
                fill="url(#paint2_linear_131_19)"
                d="M155.865 50.9153L144.361 3.54791C143.844 1.43031 141.964 0 139.88 0C139.512 0 139.143 0.0371509 138.774 0.130028L75.0921 15.8448C74.3361 16.0306 73.654 16.4021 73.0271 16.9594C72.1239 17.7581 71.3493 18.9284 70.7411 20.3958C70.3537 21.3246 70.0403 22.3648 69.7823 23.4979C68.4731 29.2935 68.7683 37.7267 70.9621 46.7544C73.2115 55.9863 76.9358 63.7509 80.8447 68.2277C81.6375 69.1194 82.4303 69.8995 83.2229 70.5125C83.4259 70.6795 83.6654 70.8283 83.9051 70.9581C85.6752 71.9798 87.7955 72.2584 89.7865 71.7571L152.492 56.5065C154.962 55.912 156.474 53.4044 155.865 50.9153Z"
            ></path>
            <defs>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="78"
                x2="16"
                y1="42"
                x1="16"
                id="paint0_linear_131_19"
                >
                <stop stop-color="#6A8EF6"></stop>
                <stop stop-color="#BF8AEB" offset="1"></stop>
                </linearGradient>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="77"
                x2="52"
                y1="25"
                x1="52"
                id="paint1_linear_131_19"
                >
                <stop stop-color="#6A8EF6"></stop>
                <stop stop-color="#BF8AEB" offset="1"></stop>
                </linearGradient>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="72"
                x2="112.5"
                y1="0"
                x1="112.5"
                id="paint2_linear_131_19"
                >
                <stop stop-color="#6A8EF6"></stop>
                <stop stop-color="#BF8AEB" offset="1"></stop>
                </linearGradient>
            </defs>
            </svg>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 104 69"
            className="tripod"
            >
            <path
                stroke-linecap="round"
                stroke-width="11"
                stroke="url(#paint0_linear_124_14)"
                d="M98.4336 63.3406L52 5.99991"
            ></path>
            <path
                stroke-linecap="round"
                stroke-width="11"
                stroke="url(#paint1_linear_124_14)"
                d="M52.4336 6L6.00004 63.3407"
            ></path>
            <path
                stroke-linecap="round"
                stroke-width="11"
                stroke="url(#paint2_linear_124_14)"
                d="M52 63L52 6"
            ></path>
            <defs>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="40.5"
                x2="68"
                y1="32"
                x1="77.5"
                id="paint0_linear_124_14"
                >
                <stop stop-color="#8E8DF2"></stop>
                <stop stop-color="#BC8BEC" offset="1"></stop>
                </linearGradient>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="40.5174"
                x2="36.4196"
                y1="32.9922"
                x1="26.1302"
                id="paint1_linear_124_14"
                >
                <stop stop-color="#8E8DF2"></stop>
                <stop stop-color="#BC8BEC" offset="1"></stop>
                </linearGradient>
                <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="34.8174"
                x2="42.7435"
                y1="34.0069"
                x1="55.4548"
                id="paint2_linear_124_14"
                >
                <stop stop-color="#8E8DF2"></stop>
                <stop stop-color="#BC8BEC" offset="1"></stop>
                </linearGradient>
            </defs>
            </svg>
            </span>
            <span className="text">Explore</span>
        </button>
    )
}