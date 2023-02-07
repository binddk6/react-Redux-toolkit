import React from "react";
type Props = {
  product: Prodcts;
  onAddToCart: () => void;
};
type Prodcts = {
  id: string;
  title: string;
  image: string;
  price: string;
};

const Product = ({ product, onAddToCart }: Props) => {
  return (
    <div className="max-w-sm flex flex-col justify-between w-40 rounded overflow-hidden shadow-lg">
      <img className="w-40 h-60" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className=" text-xs mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">Price: Rs {product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
