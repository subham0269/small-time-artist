import classNames from "classnames";
import css from "./Buttons.module.css";
import { MdArrowOutward } from "react-icons/md";

const Button = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button className={className} {...rest}>
      <span>{children}</span>
      {rest.outward && <MdArrowOutward />}
    </button>
  );
};

const CustomButton = (props) => {
  const {
    className,
    activeClassName,
    primary = false,
    outward = undefined,
    onClick,
    disabled,
    isActive,
    ...rest
  } = props;
  const rootClass = css.rootClassName;
  return (
    <Button
      className={classNames(rootClass, className, {
        [activeClassName]: isActive,
        [css.accent]: primary,
      })}
      onClick={onClick}
      disabled={disabled}
      outward={outward}
      {...rest}
    />
  );
};

export default CustomButton;
