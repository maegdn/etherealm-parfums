import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from "@apollo/client";

const httpLink = createHttpLink({
  uri: `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-07/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': String(process.env.SHOPIFY_STOREFRONT_API_TOKEN),
    'Content-Type': 'application/json',
  }
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
});