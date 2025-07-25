import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import css from "./Landing.module.css";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import CustomButton from "../../components/Buttons/Buttons";

// assets import
import flowerTree from "../../assets/decorations/flower_tree.svg";
import pinkPetals from "../../assets/decorations/pink_petals.svg";
import glimpseTree from "../../assets/decorations/flower_tree2.svg";
import glimpseHead from "../../assets/decorations/glimpse_head.svg";
import HeroImg from "../../assets/page/LandingPage/HeroImg1.png";

import decorationLand from "../../assets/decorations/landing.png";

const LandingPage = () => {
  const creativeProcess = [
    {
      title: "Get In Touch",
      description:
        "Drop a message & step into her world of artistry—your vision starts here.",
    },
    {
      title: "Consultation",
      description:
        "She listens, brainstorms, and refines, as every masterpiece starts with a great idea.",
    },
    {
      title: "Delivery & Enjoy",
      description:
        "Handcrafted with love, delivered with care—unwrap joy in every piece.",
    },
  ];

  const imageGallery = [
    "https://fastly.picsum.photos/id/304/500/800.jpg?hmac=lAS_njOAAgPkqizEQUyZ0Inxfqrvr3Qk6WiMV9yizcw",
    "https://fastly.picsum.photos/id/841/500/800.jpg?hmac=SLf2lkMYbdoynDXYNKcPtWKaZIabgygOH__YzSVGqXs",
    "https://fastly.picsum.photos/id/989/500/800.jpg?hmac=DitLLj6UM6UgK57QnxNVlw6DsZlOEHRQLifaT12IOPQ",
    "https://fastly.picsum.photos/id/599/500/800.jpg?hmac=hGFHK-kHGG87Qv0eYazAIq4dOs5C0w-_77pKhMFdh2s",
    "https://fastly.picsum.photos/id/17/500/800.jpg?hmac=KZB80c_pN6Ms4l6bH8NEGpAAAgENHuKOwlak6iMz1F4",
    "https://fastly.picsum.photos/id/247/500/800.jpg?hmac=jKWHqOl9hnNYZzyWXsPG2OrmsVILjp8y_NeQlsCiaPw",
    "https://fastly.picsum.photos/id/817/500/800.jpg?hmac=YC2Ml4s-y_p7zk7l8lozAKWb-8Ww5-qPZ3Qlo16J4YM",
    "https://fastly.picsum.photos/id/861/500/800.jpg?hmac=eIw6j2n0nMexqr0pgVI9_XJQZlQVJECocVYOTH6d7hs",
  ];

  return (
    <MainContainer>
      <Section
        className={css.herosec}
        label={"Introduction of Smalltime Artiste"}
      >
        <WrapperContainer className={css.heroWrapper}>
          <div className={css.headingSec}>
            <Heading level={1} className={css.heading}>
              Smalltime <span>Artiste</span>
            </Heading>
            <Heading level={2} className={css.heading2}>
              She Does What She Loves
              <br />
              She Loves What She Creates
            </Heading>
          </div>
          <div className={css.imgCont}>
            <img
              className={css.heroImg}
              src={HeroImg}
              alt="Gallery Preview"
              loading="lazy"
            />
          </div>
          <div className={css.cta}>
            <CustomButton outward className={css.ctaBtn} primary>
              Explore Her Art
            </CustomButton>
          </div>
        </WrapperContainer>
        <img className={css.treePos} src={flowerTree} alt="" />
        <img className={css.flowerPos} src={pinkPetals} alt="" />
      </Section>
      <Section className={css.decorSec} label={"Decor"}>
        <img
          className={css.landDecor}
          src={decorationLand}
          alt=""
          loading="lazy"
        />
      </Section>
      <Section label={"Her Creative Process"}>
        <WrapperContainer className={css.creativeProcessSection}>
          <div className={css.creativeProcessGrid}>
            {creativeProcess.map((data, i) => (
              <div className={css.processStep} key={i}>
                <Heading level={3} className={css.processTitle}>
                  {data.title}
                </Heading>
                <p className={css.processDescription}>{data.description}</p>
              </div>
            ))}
          </div>
        </WrapperContainer>
      </Section>
      <Section className={css.glimSec} label={"A glimpse into her world"}>
        <WrapperContainer className={css.glimpseContainer}>
          <div className={css.glimpseHeadContainer}>
            <img className={css.glimpseHeadLogo} src={glimpseHead} alt="" />
            <Heading level={2} className={css.glimpseHeading}>
              Get a glimpse into her world
            </Heading>
          </div>
          <div className={css.gridContainer}>
            {imageGallery.map((link, i) => (
              <div className={css.gridCard}>
                <img
                  className={css.gridImg}
                  src={link}
                  alt={`image-${i}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </WrapperContainer>
        <img className={css.glimpseTreePos} src={glimpseTree} alt="" />
      </Section>
    </MainContainer>
  );
};

export default LandingPage;
