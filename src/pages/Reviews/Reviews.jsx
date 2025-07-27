import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Heading from "../../components/Heading/Heading";
import css from "./Reviews.module.css";
import Slider from "react-slick";
import url from "../../data/url.json";
import data from "../../data/reviews.json";
import { useEffect, useState } from "react";

function Reviews() {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
  });

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setSliderSettings((prev) => ({
          ...prev,
          slidesToShow: 1,
          centerPadding: "30px",
        }));
      } else if (width >= 640 && width < 768) {
        // small tablet
        setSliderSettings((prev) => ({
          ...prev,
          slidesToShow: 1.5,
          centerPadding: "20px",
        }));
      } else if (width >= 768 && width < 1024) {
        // tablet
        setSliderSettings((prev) => ({
          ...prev,
          slidesToShow: 2.5,
          centerPadding: "20px",
        }));
      } else {
        // desktop
        setSliderSettings((prev) => ({
          ...prev,
          slidesToShow: 3,
          centerPadding: "20px",
        }));
      }
    };
    updateSettings(); // initial run
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);
  return (
    <MainContainer>
      <Section className={css.cont} label={data.label}>
        <Heading className={css.heading} level="1">
          {data.heading}
          <span>{data.highlight}</span>
        </Heading>
        <div className={`slider-container ${css.contSlider}`}>
          <Slider {...sliderSettings}>
            {data.images.map((e, i) => (
              <div key={i} className={css.cardCont}>
                <img
                  src={`${url.supabase_url}/${e.img}`}
                  alt={`${e.alt}`}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    </MainContainer>
  );
}

export default Reviews;
