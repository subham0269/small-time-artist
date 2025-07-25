import css from "./Footer.module.css";
import footerBg from "../../assets/page/footer/footer.png";
import flower from "../../assets/page/footer/flowers.png";
import Heading from "../Heading/Heading";

import { ImFacebook2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      icon: <ImFacebook2 />,
      href: "https://facebook.com", // Replace with actual URL
    },
    {
      label: "Instagram",
      icon: <SiInstagram />,
      href: "https://instagram.com", // Replace with actual URL
    },
    {
      label: "Email",
      icon: <BiLogoTelegram />,
      href: "mailto:you@example.com", // Replace with actual email
    },
    {
      label: "Call",
      icon: <IoCall />,
      href: "tel:+911234567890", // Replace with actual phone number
    },
  ];
  return (
    <footer className={css.footer}>
      <div className={css.footerContentContainer}>
        <Heading className={css.footerHeading} level="h2">
          Say <span>Hello</span>
        </Heading>
        <div className={css.socialsCont}>
          {socialLinks.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              <span className={css.icon}>{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <img className={css.bg} src={footerBg} alt="" />
      <img className={css.flow} src={flower} alt="" />
    </footer>
  );
}

export default Footer;
