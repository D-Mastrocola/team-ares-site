import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  privateStorefrontToken: "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",
  storeDomain: "https://team-ares-llc.myshopify.com",
});

// make the request
export async function getServerSideProps() {
  // Get the Storefront API url
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify(),
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return { props: json };
}
