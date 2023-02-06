import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../component/Product.component";

type Props = {};

const Products = (props: Props) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
      responseType: "stream",
    }).then((res) => {
      setProductsData(JSON.parse(res.data));
    });
  });
  return (
    <div className="text-3xl font-bold underline flex">
      {productsData.map((item: any) => {
        return <Product product={item} />;
      })}
    </div>
  );
};

export default Products;
