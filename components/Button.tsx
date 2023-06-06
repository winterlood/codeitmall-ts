import styles from "./Button.module.css";

export default function Button({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button className={`${styles.button} ${className}`} {...props} />
  );
}
