import Link, { LinkProps } from "next/link";
import buttonStyles from "./Button.module.css";
import buttonLinkStyles from "./ButtonLink.module.css";

interface Props extends LinkProps {
  className?: string;
}

export default function ButtonLink({
  className = "",
  ...props
}: Props) {
  return (
    <Link
      className={`${buttonStyles.button} ${buttonLinkStyles.buttonLink} ${className}`}
      {...props}
    />
  );
}
