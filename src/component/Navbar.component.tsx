import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div style={{ display: "flex", gap: "25px" }}>
      <Link to={"/"}> Products</Link>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Navbar;
