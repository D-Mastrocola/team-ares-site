import Header from "../Header/Header";
import Animation from "../Animation/Animation";
import {createStorefrontClient} from '@shopify/hydrogen-react';

const storefront = createStorefrontClient({
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
  storeDomain: `https://${process.env.PUBLIC_STORE_DOMAIN}`,
  storefrontApiVersion: process.env.PUBLIC_STOREFRONT_API_VERSION || "2023-01",
});

function loader({ context }) {
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
  const { products } = context.storefront.query(PRODUCTS_QUERY);
  return JSON.parse({ products });
}

let Shop = () => {
  console.log(loader);
  return (
    <>
      <Animation page="about" />
      <Header />
      <h1>Shop</h1>
    </>
  );
};

export default Shop;
