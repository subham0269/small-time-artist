import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import css from "./AboutHer.module.css";
import Her from "../../assets/content/images/her.jpg";
import Tape from "../../assets/decorations/about_tape_bg.svg";
import Flow from "../../assets/decorations/about_card_flow_bg.svg";
import illus from "../../assets/decorations/about_form_ill.svg";
import CustomButton from "../../components/Buttons/Buttons";

function Form() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <div className={css.inpFieldCont}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" placeholder="" />
      </div>
      <div className={css.inpFieldCont}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="" />
      </div>
      <div className={css.inpFieldCont}>
        <label htmlFor="email">Message:</label>
        <textarea rows={10} name="message" placeholder="" />
      </div>
      <CustomButton outward className={css.ctaBtn} primary>
        Submit
      </CustomButton>
    </form>
  );
}

function Card({ title, desc }) {
  return (
    <div className={css.cardMain}>
      <Heading className={css.heading} level={3}>
        {title}
      </Heading>
      <p>{desc}</p>
      <img className={css.tape} src={Tape} alt="" />
      <img className={css.flow} src={Flow} alt="" />
    </div>
  );
}

function CardSec({ data }) {
  return (
    <div className={css.cardContainer}>
      {data.map((d, i) => (
        <Card key={i} desc={d.desc} title={d.title} />
      ))}
    </div>
  );
}

function AboutHer() {
  const cards = [
    {
      title: "Unique & Exclusive",
      desc: "No two pieces are ever the same.",
    },
    {
      title: "Tailored To Your Vision",
      desc: "Custom creations for offices, cafes, and more.",
    },
    {
      title: "Sustainable & Handcrafted",
      desc: "Thoughtfully designed with care.",
    },
  ];

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
      <Section label={"Her ways"}>
        <WrapperContainer>
          <CardSec data={cards} />
        </WrapperContainer>
      </Section>
      <Section className={css.formSec} label={"Collaborate with her"}>
        <WrapperContainer>
          <div className={css.formSecCont}>
            <div className={css.div1}>
              <Heading level={2} className={css.formHeading}>
                Let&apos;s collaborate to bring your space, event, or gifting
                needs to life
              </Heading>
              <img src={illus} alt="" />
            </div>
            <div className={css.div2}>
              <Form />
            </div>
          </div>
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default AboutHer;
