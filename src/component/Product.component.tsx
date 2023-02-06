import React from "react";
type Props = {
  product: Prodcts;
};
type Prodcts = {
  title: string;
  image: string;
  price: string;
};

const Product = ({ product }: Props) => {
  return (
    <div className="w-40 text-xs">
      <p className="text-red-400">{product.title}</p>
      <img src={product.image} alt="" />
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
