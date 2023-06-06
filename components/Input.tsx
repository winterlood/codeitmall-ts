import styles from "./Input.module.css";

export default function Input({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...props} />;
}
