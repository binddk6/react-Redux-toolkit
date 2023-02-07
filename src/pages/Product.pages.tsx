import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../component/Product.component";
import { addToCart } from "../store/cartSlice";

type Props = {};
type productType = {
  id: string;
  title: string;
  image: string;
  price: string;
};

const Products = (props: Props) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (item: productType) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="px-4 py-10 bg-gray-200">
      <div className="flex flex-wrap gap-1 -mx-4">
        {products.map((product: productType) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
