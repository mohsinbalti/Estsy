import React from "react";

function ButtonAngleRight({ color }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path
        d="M1.3999 5.24537e-07L7.3999 6L1.3999 12L-9.73972e-05 10.6L4.5999 6L-9.82015e-05 1.4L1.3999 5.24537e-07Z"
        fill={color || "#0B0A0A"}
      />
    </svg>
  );
}

export default ButtonAngleRight;
