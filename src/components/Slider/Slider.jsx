// import { useState } from "react";
// import classNames from "classnames";
// import css from "./Slider.module.css";

// function SliderCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 5;

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className={css.carouselCont}>
//       <div
//         className={css.sliderInner}
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         <div className={classNames(css.color1, css.box)}>Box 1</div>
//         <div className={classNames(css.color2, css.box)}>Box 2</div>
//         <div className={classNames(css.color3, css.box)}>Box 3</div>
//         <div className={classNames(css.color4, css.box)}>Box 4</div>
//         <div className={classNames(css.color5, css.box)}>Box 5</div>
//       </div>

//       <div className={css.controls}>
//         <button className={css.button} onClick={prevSlide}>
//           Prev
//         </button>
//         <button className={css.button} onClick={nextSlide}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SliderCarousel;

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import css from "./Slider.module.css";
import url from "../../data/url.json";

function SliderCarousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = slides.length;

  //   const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    const translate = prevTranslate + delta;
    setCurrentTranslate(translate);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (movedBy > 50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    setPrevTranslate(-currentSlide * sliderRef.current.offsetWidth);
    setCurrentTranslate(-currentSlide * sliderRef.current.offsetWidth);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setCurrentTranslate(prevTranslate + delta);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (movedBy > 50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    setPrevTranslate(-currentSlide * sliderRef.current.offsetWidth);
    setCurrentTranslate(-currentSlide * sliderRef.current.offsetWidth);
  };

  useEffect(() => {
    setPrevTranslate(-currentSlide * sliderRef.current.offsetWidth);
    setCurrentTranslate(-currentSlide * sliderRef.current.offsetWidth);
  }, [currentSlide]);

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseUp);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, startX, currentTranslate]);

  const getTransformStyle = () => ({
    transform: `translateX(${currentTranslate}px)`,
    transition: isDragging ? "none" : "transform 0.5s ease-in-out",
  });

  return (
    <div className={css.carouselCont}>
      <div
        ref={sliderRef}
        className={css.sliderInner}
        style={getTransformStyle()}
      >
        {slides.map((e, i) => (
          <div key={i} className={classNames(css.color1, css.box)}>
            <img src={`${url.supabase_url}/${e.img}`} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {/* <div className={css.controls}> */}
      <button
        className={classNames(css.button, css.leftBtn)}
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
        }
      >
        <FaChevronLeft />
      </button>
      <button
        className={classNames(css.button, css.rightBtn)}
        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
      >
        <FaChevronRight />
      </button>
      {/* </div> */}
    </div>
  );
}

export default SliderCarousel;
