import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import css from "./AboutHer.module.css";
import Her from "../../assets/content/images/her.jpg";

function AboutHer() {
  return (
    <MainContainer>
      <Section className={css.herosec} label={"Welcome to her art universe"}>
        <WrapperContainer>
          <Heading level={1} className={css.heading}>
            Welcome To Her Art <span>Universe</span>
          </Heading>
          <div className={css.heroIngCont}>
            <img className={css.styledImg} src={Her} alt="She" />
            <Heading className={css.nameHeading} level={2}>
              MONAMI
              <br />
              CHAKRABORTHY
            </Heading>
          </div>
        </WrapperContainer>
        <WrapperContainer className={css.contentCont}>
          <p className={css.content}>
            Art has always been an intrinsic part of my life—an outlet for
            creativity, self-expression, and storytelling. While balancing a
            full-time career in social media, I rediscovered my passion for
            handcrafted artistry, which led to the birth of Smalltime Artiste on
            March 8, 2024. What started as a creative escape has now evolved
            into a growing venture where I blend personalization with aesthetics
            to craft unique, meaningful pieces. Each creation is thoughtfully
            designed, ensuring no two pieces are ever the same. Whether it's a
            custom gift, a home decor element, or a special keepsake, my goal is
            to make art that resonates with your style, emotions, and story. My
            creative companion, Kutu, adds a little joy (and mischief) to this
            journey, making every piece even more special. With over 50+ repeat
            customers, 2+ exhibitions and successful corporate collaborations, I
            strive to make gifting and decor an effortless yet deeply personal
            experience. Through Smalltime Artiste, I hope to bring more art into
            everyday life—one handcrafted piece at a time.
          </p>
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default AboutHer;
