import React from "react";
import { ReactComponent as BackgroundSm } from "../assets/svgs/background-sm.svg";
import { ReactComponent as BackgroundMd } from "../assets/svgs/background-md.svg";

const Background = (props) => {
  return (
    <header className="header-limit absolute top-0 md:right-0 w-full" style={{zIndex:-1}}>
      <BackgroundSm className="h-32 md:h-0" />
      <BackgroundMd className="h-0 md:ml-auto md:h-full" />
    </header>
  );
};

export default Background;
