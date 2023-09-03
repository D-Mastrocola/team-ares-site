import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import { createStorefrontClient } from "@shopify/hydrogen-react";
import { json } from "@shopify/remix-oxygen";

const storefront = createStorefrontClient({
  publicStorefrontToken: process.env.REACT_APP_PUBLIC_STOREFRONT_API_TOKEN,
  storeDomain: `https://${process.env.REACT_APP_PUBLIC_STORE_DOMAIN}`,
  storefrontApiVersion:
    process.env.REACT_APP_PUBLIC_STOREFRONT_API_VERSION || "2023-07",
});

function loader(context) {
  const PRODUCTS_QUERY = `#graphql
    query products {
      products(first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;
  const { products } = storefront.query(PRODUCTS_QUERY);
  return json({ products });
}

let Shop = () => {
  let products = loader();
  return (
    <>
      <Animation page="about" />
      <Header />
      <h1>Shop</h1>
      <p>{products}</p>
    </>
  );
};

export default Shop;