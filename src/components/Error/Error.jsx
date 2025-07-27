import React, { useEffect, useRef, useState } from "react";
import Heading from "../Heading/Heading";
import css from "./Error.module.css";
import MainContainer from "../MainContainer/MainContainer";

function Error({ message }) {
  const mainRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      const updateHeight = () => {
        setFooterHeight(footer.offsetHeight);
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);

      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);
  return (
    <MainContainer
      ref={mainRef}
      className={css.main}
      style={{ minHeight: `calc(100vh - 100px - ${footerHeight}px)` }}
    >
      <Heading level="1" className={css.heading}>
        {message ?? "Please try again later !!!"}
      </Heading>
    </MainContainer>
  );
}

export default Error;
