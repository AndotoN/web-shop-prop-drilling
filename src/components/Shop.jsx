//  Shop.jsx
import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product.jsx";

export default function Shop({ onAddItemToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-8">
      {DUMMY_PRODUCTS.map((product) => (
        <Product key={product.id} {...product} onAddToCart={onAddItemToCart} />
      ))}
    </div>
  );
}
