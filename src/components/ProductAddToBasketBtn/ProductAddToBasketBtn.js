import styles from "./ProductAddToBasketBtn.module.scss";

export default function ProductAddToBasketBtn() {
  return (
    <div className={styles["add-to-basket-btn"]}>
      <button type="submit" data-testid="add-to-basket-btn">
        Add to Basket
      </button>
    </div>
  );
}
