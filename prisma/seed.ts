import { PrismaClient, Role } from "../prisma/generated/client";
import { rabbits } from "../data/rabbits";
const prisma = new PrismaClient();

if (process.env.NODE_ENV === "development") {
  const main = async () => {
    await prisma.user.create({
      data: {
        name: "test Admin",
        email: `testemail@gmail.com`,
        role: Role.ADMIN,
      },
    });

    await prisma.rabbit.createMany({
      data: rabbits,
    });
  };

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
