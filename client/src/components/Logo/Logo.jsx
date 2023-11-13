import React from "react";
import logo from "../../assets/images/medicare_logo.png";

function Logo({ width = "100px", height = "100px" }) {
  return (
    <div>
      <img
        src={logo}
        alt="Medicare logo"
        style={{ width: width, height: height }}
      />
    </div>
  );
}

export default Logo;
