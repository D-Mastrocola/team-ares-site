import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import React, { useState, useEffect } from "react";
import { getServerSideProps } from "../../Helper/shopify-client";

// let testResponse = fetch("https://team-ares-llc.myshopify.com").
// then((e) =>  console.log(e));

let Shop = () => {
  getServerSideProps();
  return (
    <>
      <Animation page="about" />
      <Header />
      <h1>Shop</h1>
    </>
  );
};

export default Shop;
