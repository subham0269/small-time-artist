import React from "react";
import css from "./Modal.module.css";
import classNames from "classnames";
import { Link } from "react-router";
import CustomButton from "../Buttons/Buttons";

function Modal({ isOpen, onClose, list }) {
  return (
    <div
      onClick={onClose}
      className={classNames(css.overlay, { [css.close]: !isOpen })}
    >
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        <ul className={css.ul}>
          {list.map((list, i) => (
            <li key={i}>
              <Link className={css.navLink} to={list.path}>
                <CustomButton
                  onClick={onClose}
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
  );
}

export default Modal;
