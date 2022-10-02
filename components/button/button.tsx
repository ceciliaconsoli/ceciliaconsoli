import Link from "next/link";
import { FC } from "react";
import styles from "./button.module.css";

type button = "primary" | "secondary" | "contacts";

type ButtonProps = {
  text: string;
  type: button;
  icon?: any;
  href: string;
};

const Button: FC<ButtonProps> = ({ text, icon, type, href }) => {
  return (
    <Link href={href}>
      <a>
        <div
          id="button"
          className={`${styles.button} ${
            type === "primary"
              ? styles.primaryButton
              : type === "secondary"
              ? styles.secondaryButton
              : styles.contactsButton
          }`}
        >
          <div className={styles.buttonContent}>
            {text}
            {icon}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Button;
