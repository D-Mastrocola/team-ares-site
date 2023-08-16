import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import React, { useState, useEffect } from "react";
import getStorefrontApiUrl from '../../Helper/shopify-client';



const publicKey = 'dc774abee08b138e8f96f620d0063f3a';

let testResponse = fetch("https://team-ares-llc.myshopify.com").
then((e) =>  console.log(e));

let Shop = () => {
  
  return (
    <>
      <Animation page="about" />
      <Header />
      <h1>Shop</h1>
    </>
  );
};

export default Shop;
