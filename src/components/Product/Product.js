import { useState, useEffect } from "react";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductAddToBasketForm from "../../components/ProductAddToBasketForm/ProductAddToBasketForm";
import styles from "./Product.module.scss";

export default function Product() {
  const [productTitle, setProductTitle] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productColours, setProductColours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setProductData();
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Sorry! The product could not be loaded.";
  }

  return (
    <div className={styles["product"]}>
      <ProductImage src={productImage} alt={productTitle} />

      <ProductAddToBasketForm
        productTitle={productTitle}
        productColours={productColours}
        setProductImage={setProductImage}
      />
    </div>
  );

  async function setProductData() {
    try {
      const response = await fetch("data/product.json");
      const productData = await response.json();
      const { title, colours } = productData.product;
      const { image } = colours.find((color) => color.defaultImage === true);

      setProductTitle(title);
      setProductImage(image);
      setProductColours(colours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }
}
