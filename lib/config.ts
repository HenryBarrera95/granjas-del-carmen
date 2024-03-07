const config = {
  development: {
    graphqlUri: "http://localhost:3000/api/graphql",
  },
  production: {
    graphqlUri: "https://granjas-del-carmen.vercel.app/api/graphql",
  },
  test: {
    graphqlUri: "http://localhost:4000/api/graphql", // Ajusta la URL de test según sea necesario
  },
};

export default config;
