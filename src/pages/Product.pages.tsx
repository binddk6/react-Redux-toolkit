import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import ProductCard from "../component/Product.component";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

type productType = {
  id: string;
  title: string;
  image: string;
  price: string;
};

const Products = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.products.status);
  const productItem = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddToCart = (item: productType) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="px-4 py-10 bg-gray-200">
      <div className="flex flex-wrap gap-1 -mx-4">
        {" "}
        {status === "loading" && <p>Loading products...</p>}
        {status === "error" && <p>There is some error to fetch the data :(</p>}
        {/* {error && <p>Error loading products: {error.message}</p>} */}
        {status === "success" &&
          productItem.map((product: productType) => (
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
