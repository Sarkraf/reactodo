import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";

// Middleware pour ajouter le CSRF token aux requêtes
const csrfMiddleware = new ApolloLink((operation, forward) => {
  // Récupérer le token CSRF depuis les meta tags
  const token = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");

  operation.setContext({
    headers: {
      "X-CSRF-Token": token,
    },
  });

  return forward(operation);
});

const httpLink = createHttpLink({
  uri: "/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link: ApolloLink.from([csrfMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
