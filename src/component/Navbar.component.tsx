import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";

type Props = {};

const Navbar = (props: Props) => {
  const item = useSelector((state: RootState) => state.cart.items);
  return (
    <div style={{ display: "flex", gap: "25px" }}>
      <Link to={"/"}> Products</Link>
      <Link to={"/cart"}>Cart</Link>
      <p>cart value :{item.length}</p>
    </div>
  );
};

export default Navbar;
