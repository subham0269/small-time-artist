// Breadcrumbs.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Capitalize and format words
  const format = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    // <nav aria-label="breadcrumb" style={{ padding: "1rem 0" }}>
    <ol className={css.breadCrumListStyle}>
      <li>
        <Link className={css.link} to="/">
          Home
        </Link>
      </li>

      {pathnames.map((segment, index) => {
        const pathTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <li key={pathTo} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ margin: "0 0.5rem" }}>&gt;</span>
            {isLast ? (
              <span>{format(segment)}</span>
            ) : (
              <Link className={css.link} to={pathTo}>
                {format(segment)}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
    // </nav>
  );
};

export default Breadcrumbs;
