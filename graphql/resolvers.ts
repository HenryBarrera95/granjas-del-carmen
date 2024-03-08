import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    shopping: () => {
      return prisma.shopping.findMany();
    },
  },
};
