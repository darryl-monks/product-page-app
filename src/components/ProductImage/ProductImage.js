export default function ProductImage({ src, alt }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        width="550"
        height="733"
        data-testid="product-image"
      />
    </div>
  );
}
