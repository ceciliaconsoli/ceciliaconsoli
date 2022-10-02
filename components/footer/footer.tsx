import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright {year} | Cecilia Consoli</p>
    </footer>
  );
};

export default Footer;
