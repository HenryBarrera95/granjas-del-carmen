import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    shopping: () => {
      return prisma.shopping.findMany();
      //   return [
      //     {
      //       item: "Comida Conejos",
      //       description: "Bulto 50 kgs",
      //       cantity: "2",
      //       unityValue: "50000",
      //       purchaseDate: "07032024",
      //       totalValue: "100000",
      //     },
      //     {
      //       item: "Comida Vacas",
      //       description: "Bulto 50 kgs",
      //       cantity: "2",
      //       unityValue: "80000",
      //       purchaseDate: "07032024",
      //       totalValue: "160000",
      //     },
      //   ];
    },

    // rabbits: () => {
    //   return prisma.rabbit.findMany();
    // },
  },
};
