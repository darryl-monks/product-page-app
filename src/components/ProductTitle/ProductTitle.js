import styles from "./ProductTitle.module.scss";

export default function ProductTitle({ title }) {
  return (
    <div className={styles["product-title"]}>
      <h1 data-testid="product-title">{title}</h1>
    </div>
  );
}
