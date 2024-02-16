import * as React from "react";
const BuzzFeed = ({ fill, height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    width={width}
    viewBox="0 0 32 32"
  >
    <path
      fillRule="evenodd"
      d="M32 16c0 8.839-7.161 16-16 16S0 24.839 0 16 7.161 0 16 0s16 7.161 16 16zm-5.531-.364L25.166 6.38l-8.667 3.5 3.432 1.984-3.244 5.62-5.62-3.244-5.537 9.588 3.1 1.792 3.749-6.489 5.62 3.244 5.036-8.724z"
      clipRule="evenodd"
    />
  </svg>
);
export default BuzzFeed;
