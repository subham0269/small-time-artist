import React, { useState } from "react";
import css from "./Faq.module.css";
import classNames from "classnames";
import { FaCircle } from "react-icons/fa";
import Heading from "../Heading/Heading";

function FAQ({ data }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={css.faqContainer}>
      <div className={css.faqSidebar}>
        {data.map((item, index) => (
          <div
            key={index}
            className={classNames(css.faqItem, {
              [css.active]: selected === index,
            })}
            onClick={() => setSelected(index)}
          >
            <FaCircle className={css.dot} />
            <p>{item.question}</p>
            <span>&#x276F;</span>
          </div>
        ))}
      </div>
      <div className={css.faqContent}>
        <Heading level="3">{data[selected].question}</Heading>
        <p>{data[selected].answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
