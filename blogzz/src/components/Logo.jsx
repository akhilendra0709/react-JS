import React from "react";

function Logo({ width = "64px" }) {
  return (
    <div>
      <img
        src="https://img.icons8.com/fluency/512/bebo.png"
        alt="logo"
        style={{width}}
      />
    </div>
  );
}

export default Logo;
