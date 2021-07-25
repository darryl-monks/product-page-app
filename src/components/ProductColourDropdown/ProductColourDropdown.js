import styles from "./ProductColoursDropdown.module.scss";

export default function ProductColourDropdown({ options, setProductImage }) {
  return (
    <div className={styles["product-colours"]}>
      <select
        name="product-colours"
        id="product-colours"
        className={styles["product-colours__dropdown"]}
        onChange={(event) => {
          setProductImage(event.target.selectedOptions[0].dataset.productImage);
        }}
        data-testid="colour-select"
      >
        {options.map(({ color, image, defaultImage }, id) => (
          <option
            value={uppercaseFirstCharacterInString(color)}
            data-product-image={image}
            key={id}
            data-testid="colour-option"
          >
            {uppercaseFirstCharacterInString(color)}
          </option>
        ))}
      </select>

      <div className={styles["product-colours__dropdown-icon"]}>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.113 3.96l.094.083L8 9.835l5.793-5.792a1 1 0 011.497 1.32l-.083.094-6.5 6.5a.995.995 0 01-.53.277l-.118.014h-.118a.996.996 0 01-.554-.208l-.094-.083-6.5-6.5a1 1 0 011.32-1.497z"
            fill="#262626"
            fillRule="nonzero"
          />
        </svg>
      </div>
    </div>
  );

  function uppercaseFirstCharacterInString(string) {
    const firstCharacter = string.charAt(0).toUpperCase();
    const restOfWord = string.slice(1);

    return firstCharacter + restOfWord;
  }
}
