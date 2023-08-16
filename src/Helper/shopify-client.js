import {createStorefrontClient} from '@shopify/hydrogen-react';

const client = createStorefrontClient({
  privateStorefrontToken: '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',
  storeDomain: 'https://team-ares-llc.myshopify.com',
  storefrontApiVersion: 'dc774abee08b138e8f96f620d0063f3a'

});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;