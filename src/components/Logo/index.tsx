import React from "react";
import "./style.css";

export const Logo = ({ deseo }: { deseo: Number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      width={`${deseo}pt`}
      height={`${deseo}pt`}
      className="logo"
    >
      <defs>
        <clipPath id="_clipPath_WXgV6viP7jXO7iBf7O7F7weRaxKsjKGS">
          <rect width="500" height="500" />
        </clipPath>
      </defs>
      <filter id="gaussian-blur">
        <feOffset dx="5" dy="-15" />
        <feGaussianBlur stdDeviation="1 0" result="offset-blur" />

        <feComposite
          operator="out"
          in="SourceGraphic"
          in2="offset-blur"
          result="inverse"
        />

        <feFlood floodColor="black" floodOpacity=".95" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />

        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <g
        // clipPath="url(#_clipPath_WXgV6viP7jXO7iBf7O7F7weRaxKsjKGS)"
        filter="url(#gaussian-blur)"
      >
        <path
          d=" M 0 0 Q 66.266 0 117 0 C 183 11.333 193.5 58.833 197 88 C 197 86.833 197 409.333 197 411 C 196.222 436.667 185.556 489.333 117 495 Q 117 495.333 0 495 L 0 0 Z  M 50 48.084 Q 114.343 49.833 114.343 50 C 119.629 51.011 141.675 58.764 146 88 Q 147 87.833 146 407.816 Q 137.111 443.32 107.414 446 Q 106.424 445.33 50 446 L 50 48.084 Z "
          fillRule="evenodd"
          vectorEffect="non-scaling-stroke"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeLinecap="square"
          strokeMiterlimit="3"
        />
        <path d=" M 444 158 L 493 158 Q 493 32 493 33 C 493.333 24 487.333 5 466 0 C 466 0 330.667 0 331 0 Q 306.167 9.625 303 35 Q 302 463.333 303 463 C 304.667 483.292 322.167 492.167 331 495 C 330.917 494.917 460.5 495.167 460 495 C 481.542 495.083 490.417 479.458 493 467 Q 492.75 466.917 493 243 L 398 243 L 398 290 L 444 290 L 444 446 L 353 446 L 353 50 L 444 50 L 444 158 Z " />
      </g>
    </svg>
  );
};
