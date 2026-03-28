import { useState } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { FiArrowUpRight } from "react-icons/fi";
import css from "./Products.module.css";
import classNames from "classnames";
import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";

import card1 from "../../assets/decorations/products/card1_decor.svg";
import card2 from "../../assets/decorations/products/card2_decor.svg";
import card3 from "../../assets/decorations/products/card3_decor.svg";
import card4 from "../../assets/decorations/products/card4_decor.svg";
import card5 from "../../assets/decorations/products/card5_decor.svg";
import card6 from "../../assets/decorations/products/card6_decor.svg";
import card7 from "../../assets/decorations/products/card7_decor.svg";
import card8 from "../../assets/decorations/products/card8_decor.svg";
import card9 from "../../assets/decorations/products/card9_decor.svg";
import card10 from "../../assets/decorations/products/card10_decor.svg";
import card11 from "../../assets/decorations/products/card11_decor.svg";
import card12 from "../../assets/decorations/products/card12_decor.svg";

import card1_img from "../../assets/content/products/grid_sec/card1.png";
import card2_img from "../../assets/content/products/grid_sec/card2.png";
import card3_img from "../../assets/content/products/grid_sec/card3.png";
import card4_img from "../../assets/content/products/grid_sec/card4.png";
import card5_img from "../../assets/content/products/grid_sec/card5.png";
import card6_img from "../../assets/content/products/grid_sec/card6.png";
import card7_img from "../../assets/content/products/grid_sec/card7.png";
import card8_img from "../../assets/content/products/grid_sec/card8.png";
import card9_img from "../../assets/content/products/grid_sec/card9.png";
import card10_img from "../../assets/content/products/grid_sec/card10.png";
import card11_img from "../../assets/content/products/grid_sec/card11.png";
import card12_img from "../../assets/content/products/grid_sec/card12.png";

import featuredProducts from "../../data/products/featured.json";
import url from "../../data/url.json";
import FAQ from "../../components/Faq/Faq";

function Products() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  console.log("test 2");
  const gridItems = [
    {
      title: "Frame Your Phone",
      url: "frame-your-phone",
      img: card1_img,
      bgColor: "#fff0e3",
      decor: card1,
    },
    {
      title: "Timeless Treasures",
      url: "timeless-treasures",
      img: card2_img,
      bgColor: "#eee6ff",
      decor: card2,
    },
    {
      title: "Paper Whispers",
      url: "paper-whispers",
      img: card3_img,
      bgColor: "#f8f8f8",
      decor: card3,
    },
    {
      title: "Old soul kitchen",
      url: "old-soul-kitchen",
      img: card4_img,
      bgColor: "#e5f7f9",
      decor: card4,
    },
    {
      title: "The Gogh Edit",
      url: "the-gogh-edit",
      img: card5_img,
      bgColor: "#ffffff",
      decor: card5,
    },
    {
      title: "Nestled Nook",
      url: "nestled-nook",
      img: card6_img,
      bgColor: "#e6e2da",
      decor: card6,
    },
    {
      title: "Muse & memo",
      url: "muse-and-memo",
      img: card7_img,
      bgColor: "#e7fff4",
      decor: card7,
    },
    {
      title: "Pink Parade",
      url: "pink-parade",
      img: card8_img,
      bgColor: "#ffe6f2",
      decor: card8,
    },
    {
      title: "The Bookish mark",
      url: "the-bookish-mark",
      img: card9_img,
      bgColor: "#ffeedd",
      decor: card9,
    },
    {
      title: "Wearable Whimpsy",
      url: "wearable-whimpsy",
      img: card10_img,
      bgColor: "#f7f7f7",
      decor: card10,
    },
    {
      title: "A little extra",
      url: "a-little-extra",
      img: card11_img,
      bgColor: "#ffe6eb",
      decor: card11,
    },
    {
      title: "Hold it pretty",
      url: "hold-it-pretty",
      img: card12_img,
      bgColor: "#f0f6ff",
      decor: card12,
    },
  ];

  const handleChangeRoute = (url) => {
    navigate(`/products/${url}`);
  };

  return (
    <MainContainer>
      <Helmet>
        <title>Our Collections - Small Time Artist</title>
        <meta
          name="description"
          content="Browse our unique collection of handcrafted products - from Frame Your Phone to Nestled Nook. Discover artisanal creations that blend beauty with functionality."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Collections - Small Time Artist"
        />
        <meta
          property="og:description"
          content="Browse our unique collection of handcrafted products - from Frame Your Phone to Nestled Nook. Discover artisanal creations that blend beauty with functionality."
        />
        <meta property="og:image" content={card1_img} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Collections - Small Time Artist"
        />
        <meta
          name="twitter:description"
          content="Browse our unique collection of handcrafted products - from Frame Your Phone to Nestled Nook. Discover artisanal creations that blend beauty with functionality."
        />
        <meta name="twitter:image" content={card1_img} />
      </Helmet>
      <Breadcrumbs />
      <Section label="All product categories">
        <WrapperContainer className={css.heroWrapper}>
          <Heading level={1} className={css.heading}>
            Choose Your <span>Aesthetics</span>
          </Heading>
          <div className={css.gridContainer}>
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={classNames(css.card, css[`card${index + 1}`])}
                style={{ backgroundColor: item.bgColor }}
                onClick={() => handleChangeRoute(item.url)}
              >
                <div className={css.cardContent}>
                  <Heading level={3} className={css.title}>
                    {item.title}
                  </Heading>
                  <FiArrowUpRight className={css.icon} />
                </div>
                <div className={css.imgCard}>
                  <img className={css.cardImg} src={item.img} alt="" />
                </div>
                <img className={css.decorImg} src={item.decor} alt="" />
              </div>
            ))}
          </div>
        </WrapperContainer>
      </Section>
      <Section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={classNames(css.featured)}
        label={"Featured products"}
      >
        <Heading
          className={classNames(css.heading, css.featuredHeading)}
          level="2"
        >
          Featured <span>Products</span>
        </Heading>
        <div
          className={classNames(css.scrollContainer, {
            [css.showScroll]: hovered,
            [css.hideScroll]: !hovered,
          })}
        >
          {featuredProducts?.list?.map((card, index) => (
            <div className={css.card} key={index}>
              <div className={css.imgContainer}>
                <img src={`${card.image}`} alt={card.title} loading="lazy" />
              </div>
              <div>
                {/* <Heading className={css.h3} level="3">
                  {card.title}
                </Heading> */}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section
        className={(css.featured, css.faq)}
        label="Frequently Asked Questions"
      >
        <Heading
          className={classNames(css.featuredHeading, css.color)}
          level="2"
        >
          Frequently Asked Questions
        </Heading>
        <FAQ data={featuredProducts.faq} />
      </Section>
    </MainContainer>
  );
}

export default Products;
