import * as React from 'react';
import { DefaultIconSvg } from '../DefaultIconSvg';
import { IconProps } from '../types';

export const TypeScriptIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant = 'core', ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        colorVariant={colorVariant}
        sizeVariant={sizeVariant}
        id="svg"
        width="400"
        height="400"
        viewBox="0, 0, 400,400"
        transform="scale(0.8)"
    >
        <g>
            <path
                id="path0"
                d="M294.524 182.860 C 275.121 185.254,258.846 197.792,252.813 214.996 C 249.588 224.190,249.533 240.170,252.695 249.465 C 258.492 266.509,269.804 276.247,298.568 288.952 C 323.667 300.038,329.072 303.931,330.580 312.009 C 332.803 323.922,324.617 332.634,309.637 334.297 C 294.021 336.030,279.787 328.616,270.310 313.813 C 268.919 311.640,270.850 310.896,256.840 319.001 C 240.390 328.516,239.259 329.209,239.259 329.768 C 239.259 330.771,244.744 339.061,248.112 343.148 C 258.443 355.682,277.095 364.915,295.602 366.655 C 339.515 370.784,367.824 350.626,367.795 315.249 C 367.771 286.673,355.994 273.403,314.575 255.284 C 293.901 246.240,289.324 242.843,287.289 235.032 C 284.236 223.311,292.820 214.094,306.150 214.781 C 314.643 215.219,319.346 217.926,325.475 225.905 C 328.988 230.477,328.498 230.363,332.820 227.625 C 340.361 222.848,354.518 213.295,356.807 211.440 C 357.461 210.910,350.693 202.039,346.272 197.632 C 338.298 189.684,329.617 185.243,318.533 183.443 C 315.360 182.927,297.494 182.494,294.524 182.860 M90.280 184.570 L 88.057 184.696 87.838 189.989 C 87.717 192.900,87.618 200.173,87.617 206.150 L 87.616 217.018 113.732 217.018 L 139.848 217.018 139.848 290.986 L 139.848 364.954 158.214 364.954 L 176.580 364.954 176.580 290.986 L 176.580 217.018 202.582 217.018 L 228.585 217.018 228.360 200.954 C 228.237 192.118,228.048 184.802,227.940 184.694 C 227.730 184.483,93.959 184.363,90.280 184.570 "
                stroke="none"
                fill="#fbfbfb"
                fillRule="evenodd"
            />
            <path
                id="path1"
                d="M0.000 200.000 L 0.000 400.000 200.000 400.000 L 400.000 400.000 400.000 200.000 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 200.000 M312.588 182.652 C 326.299 183.735,336.128 187.814,345.228 196.199 C 349.227 199.885,356.866 209.666,356.866 211.102 C 356.866 211.908,346.614 219.068,333.341 227.531 C 328.472 230.635,328.863 230.650,326.272 227.265 C 322.332 222.116,321.589 221.273,319.589 219.682 C 311.608 213.331,297.805 213.277,291.420 219.572 C 285.696 225.216,285.575 235.590,291.159 242.029 C 294.017 245.325,299.447 248.368,313.617 254.614 C 353.675 272.270,365.278 283.910,368.010 309.183 C 372.083 346.866,342.973 370.509,296.866 366.964 C 272.322 365.077,248.608 350.144,239.360 330.751 C 238.609 329.177,237.343 330.071,253.683 320.637 C 261.040 316.389,267.530 312.641,268.104 312.309 L 269.147 311.704 270.691 314.026 C 280.130 328.221,292.433 334.967,307.462 334.190 C 321.668 333.455,330.048 327.046,330.501 316.568 C 330.985 305.338,326.727 301.628,299.579 289.628 C 272.060 277.464,261.883 269.583,254.793 254.944 C 248.440 241.828,248.423 222.760,254.751 209.773 C 264.406 189.960,284.692 180.448,312.588 182.652 M228.348 184.446 C 228.371 184.475,228.447 191.853,228.517 200.842 L 228.644 217.186 202.612 217.273 L 176.580 217.359 176.580 291.325 L 176.580 365.291 158.045 365.291 L 139.511 365.291 139.511 291.323 L 139.511 217.355 113.564 217.355 L 87.616 217.355 87.616 201.896 C 87.616 193.393,87.710 185.965,87.826 185.388 L 88.035 184.340 98.525 184.222 C 108.048 184.115,228.251 184.322,228.348 184.446 "
                stroke="none"
                fill="#047ccc"
                fillRule="evenodd"
            />
            <path
                id="path2"
                d="M300.659 182.558 C 301.902 182.623,304.025 182.623,305.377 182.559 C 306.729 182.495,305.712 182.442,303.117 182.441 C 300.522 182.441,299.416 182.493,300.659 182.558 M89.560 184.574 C 90.165 184.649,91.075 184.648,91.581 184.571 C 92.088 184.494,91.592 184.433,90.480 184.435 C 89.368 184.437,88.954 184.499,89.560 184.574 M222.338 184.580 C 223.504 184.646,225.324 184.646,226.382 184.579 C 227.441 184.512,226.487 184.458,224.263 184.459 C 222.039 184.460,221.173 184.514,222.338 184.580 M228.271 191.238 C 228.272 193.833,228.325 194.850,228.389 193.498 C 228.453 192.146,228.452 190.023,228.388 188.781 C 228.323 187.538,228.271 188.644,228.271 191.238 M87.724 189.722 C 87.724 190.927,87.785 191.420,87.860 190.817 C 87.934 190.215,87.934 189.229,87.860 188.627 C 87.785 188.024,87.724 188.517,87.724 189.722 M139.677 290.986 C 139.677 331.761,139.716 348.391,139.764 327.943 C 139.812 307.494,139.812 274.133,139.764 253.806 C 139.716 233.480,139.677 250.211,139.677 290.986 M264.518 268.660 C 265.345 269.541,266.065 270.261,266.119 270.261 C 266.372 270.261,266.105 269.959,264.617 268.562 L 263.016 267.060 264.518 268.660 M368.106 315.249 C 368.105 316.917,368.162 317.641,368.233 316.859 C 368.303 316.077,368.304 314.712,368.235 313.827 C 368.165 312.941,368.107 313.580,368.106 315.249 M330.659 314.069 C 330.659 314.718,330.729 314.983,330.814 314.659 C 330.898 314.334,330.898 313.804,330.814 313.479 C 330.729 313.155,330.659 313.420,330.659 314.069 M304.381 334.534 C 305.076 334.606,306.213 334.606,306.908 334.534 C 307.603 334.461,307.035 334.401,305.644 334.401 C 304.254 334.401,303.686 334.461,304.381 334.534 M354.663 350.211 L 352.991 351.980 354.760 350.308 C 356.404 348.754,356.684 348.441,356.432 348.441 C 356.379 348.441,355.583 349.238,354.663 350.211 M304.381 367.226 C 305.817 367.289,308.168 367.289,309.604 367.226 C 311.040 367.163,309.865 367.111,306.992 367.111 C 304.120 367.111,302.944 367.163,304.381 367.226 "
                stroke="none"
                fill="#7bbce4"
                fillRule="evenodd"
            />
            <path
                id="path3"
                d="M137.888 184.246 C 141.536 184.300,147.602 184.300,151.368 184.246 C 155.133 184.191,152.148 184.147,144.735 184.147 C 137.321 184.147,134.240 184.191,137.888 184.246 M228.216 185.678 C 228.216 186.327,228.286 186.592,228.370 186.268 C 228.455 185.944,228.455 185.413,228.370 185.088 C 228.286 184.764,228.216 185.029,228.216 185.678 M346.420 197.641 C 347.048 198.290,347.639 198.821,347.731 198.821 C 347.824 198.821,347.385 198.290,346.757 197.641 C 346.128 196.992,345.538 196.462,345.445 196.462 C 345.352 196.462,345.791 196.992,346.420 197.641 M228.475 216.454 C 228.475 216.970,226.441 217.020,202.443 217.102 L 176.411 217.190 202.454 217.273 C 229.387 217.357,229.915 217.334,228.685 216.105 C 228.570 215.989,228.475 216.146,228.475 216.454 M100.505 217.270 C 107.687 217.321,119.440 217.321,126.622 217.270 C 133.804 217.220,127.928 217.178,113.564 217.178 C 99.200 217.178,93.324 217.220,100.505 217.270 M250.134 230.834 C 250.134 231.668,250.200 232.009,250.280 231.592 C 250.360 231.175,250.360 230.493,250.280 230.076 C 250.200 229.659,250.134 230.000,250.134 230.834 M286.865 230.834 C 286.865 231.668,286.931 232.009,287.011 231.592 C 287.092 231.175,287.092 230.493,287.011 230.076 C 286.931 229.659,286.865 230.000,286.865 230.834 M149.055 365.206 C 154.211 365.259,162.552 365.259,167.589 365.206 C 172.627 365.154,168.408 365.111,158.214 365.111 C 148.020 365.111,143.899 365.154,149.055 365.206 "
                stroke="none"
                fill="#56a6dd"
                fillRule="evenodd"
            />
            <path
                id="path4"
                d="M114.300 184.245 C 117.393 184.301,122.549 184.301,125.758 184.246 C 128.967 184.190,126.436 184.145,120.135 184.145 C 113.833 184.144,111.208 184.190,114.300 184.245 M162.024 184.245 C 164.305 184.304,167.945 184.303,170.112 184.245 C 172.279 184.186,170.413 184.138,165.965 184.139 C 161.516 184.139,159.743 184.187,162.024 184.245 M263.337 197.557 L 262.005 198.989 263.437 197.657 C 264.769 196.418,265.024 196.125,264.769 196.125 C 264.714 196.125,264.070 196.769,263.337 197.557 M228.601 212.468 C 228.602 214.507,228.657 215.298,228.725 214.225 C 228.792 213.153,228.791 211.485,228.723 210.518 C 228.655 209.552,228.600 210.430,228.601 212.468 M250.120 228.475 C 250.120 229.124,250.190 229.389,250.274 229.065 C 250.359 228.741,250.359 228.210,250.274 227.885 C 250.190 227.561,250.120 227.826,250.120 228.475 M250.134 233.530 C 250.134 234.364,250.200 234.705,250.280 234.288 C 250.360 233.871,250.360 233.189,250.280 232.772 C 250.200 232.355,250.134 232.696,250.134 233.530 M353.159 277.443 C 353.159 277.501,353.652 277.994,354.254 278.538 L 355.350 279.528 354.360 278.433 C 353.437 277.412,353.159 277.183,353.159 277.443 M326.011 327.296 L 325.021 328.391 326.116 327.401 C 326.719 326.857,327.211 326.364,327.211 326.306 C 327.211 326.046,326.933 326.275,326.011 327.296 "
                stroke="none"
                fill="#2e91d4"
                fillRule="evenodd"
            />
        </g>
    </DefaultIconSvg>
);
