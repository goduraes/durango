import React from "react";

const DgLoading = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="DgLoading"
    >
      <circle cx="4" cy="12" r="3">
        <animate
          id="spinner_jObz"
          begin="0;spinner_vwSQ.end-0.25s"
          attributeName="r"
          dur="0.75s"
          values="3;.2;3"
        />
      </circle>
      <circle cx="12" cy="12" r="3">
        <animate
          begin="spinner_jObz.end-0.6s"
          attributeName="r"
          dur="0.75s"
          values="3;.2;3"
        />
      </circle>
      <circle cx="20" cy="12" r="3">
        <animate
          id="spinner_vwSQ"
          begin="spinner_jObz.end-0.45s"
          attributeName="r"
          dur="0.75s"
          values="3;.2;3"
        />
      </circle>
    </svg>
  );
};
export default DgLoading;