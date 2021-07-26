import { useState } from "react";
import styles from "./ProductQuantity.module.scss";

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles["product-quantity"]}>
      <label htmlFor="product-quantity">Quantity:</label>

      <input
        name="product-quantity"
        id="product-quantity"
        type="number"
        value={quantity}
        min="1"
        max="99"
        pattern="[0-9]*"
        required="required"
        onChange={(event) => {
          setQuantity(event.target.value);
        }}
        onBlur={(event) => {
          const value = event.target.value;
          if (value === "") {
            setQuantity(1);
          } else {
            setQuantity(value);
          }
        }}
        data-testid="product-quantity"
      />
    </div>
  );
}
