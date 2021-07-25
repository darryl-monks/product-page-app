import ProductTitle from "../ProductTitle/ProductTitle";
import ProductColourDropdown from "../ProductColourDropdown/ProductColourDropdown";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import ProductAddToBasketBtn from "../ProductAddToBasketBtn/ProductAddToBasketBtn";

export default function ProductAddToBasketForm({
  productTitle,
  productColours,
  setProductImage,
}) {
  return (
    <form onSubmit={(event) => addToBasket(event)}>
      <ProductTitle title={productTitle} />

      <ProductColourDropdown
        options={productColours}
        setProductImage={setProductImage}
      />

      <ProductQuantity />

      <ProductAddToBasketBtn />
    </form>
  );

  function addToBasket(event) {
    const colourSelect = document.getElementById("product-colours");
    const quantityInput = document.getElementById("product-quantity");
    const pluralProductTitle = () => {
      let title = productTitle;

      if (quantityInput.value > 1) {
        title += "s";
      }

      return title;
    };

    alert(
      `You've added ${quantityInput.value} ${
        colourSelect.value
      } ${pluralProductTitle()} to your basket!`
    );

    event.preventDefault();
  }
}
