import { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.css";
import arrowImg from "@/public/arrow.svg";

interface Props {
  className: string;
  name: string;
  value: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (name: string, value: string) => void;
}

export default function Dropdown({
  className,
  name,
  value,
  options,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  function handleInputClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleBlur() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const isInside = inputRef.current?.contains(
        e.target as HTMLElement
      );
      if (!isInside) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, []);

  const classNames = `${styles.input} ${
    isOpen ? styles.opened : ""
  } ${className}`;
  const selectedOption = options.find(
    (option) => option.value === value
  );

  return (
    <div
      className={classNames}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {selectedOption?.label}
      <img
        className={styles.arrow}
        src={arrowImg.src}
        width={12}
        height={9}
        alt="▼"
      />
      <div className={styles.options}>
        {options.map((option) => {
          const selected = value === option.value;
          const className = `${styles.option} ${
            selected ? styles.selected : ""
          }`;
          return (
            <div
              className={className}
              key={option.value}
              onClick={() => onChange(name, option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
