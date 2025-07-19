import logo from "/logo.svg";
import css from "./Navbar.module.css";
import CustomButton from "../Buttons/Buttons";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const navList = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Product" },
    { path: "/reviews", name: "Reviews" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const rootEl = document.getElementById("root");

    if (!rootEl) return;

    const handleScroll = () => {
      const scrollTop = rootEl.scrollTop;

      if (scrollTop >= 8 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    rootEl.addEventListener("scroll", handleScroll, { passive: true });

    return () => rootEl.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav className={classNames(css.nav, { [css.navScroll]: isScrolled })}>
      <div className={css.navContainer}>
        <div className={css.logo}>
          <img src={logo} alt="logo" loading="lazy" />
        </div>
        <div>
          <ul>
            {navList.map((list, i) => (
              <li key={i}>
                <Link className={css.navLink} to={list.path}>
                  <CustomButton
                    className={classNames(css.navButton, {
                      [css.isActive]: location.pathname === list.path,
                    })}
                  >
                    {list.name}
                  </CustomButton>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
