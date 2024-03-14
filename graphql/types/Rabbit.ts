import { Gender } from "../../prisma/generated/client";
import { builder } from "../builder";
import { DateTimeResolver } from "graphql-scalars";

builder.addScalarType("DateTime", DateTimeResolver);

builder.prismaObject("Rabbit", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    image: t.exposeString("image", { nullable: true }),
    birthDate: t.expose("birthDate", { type: "DateTime", nullable: true }),
    gender: t.exposeString("gender", { nullable: true }),
    createdBy: t.relation("createdBy", { nullable: true }),
  }),
});

builder.queryField("Rabbits", (t) =>
  t.prismaField({
    type: ["Rabbit"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.rabbit.findMany({ ...query }),
  })
);

builder.mutationField("createRabbit", (t) =>
  t.prismaField({
    type: "Rabbit",
    args: {
      name: t.arg.string({ required: true }),
      image: t.arg.string({ required: true }),
      userId: t.arg.string({ required: true }),
      gender: t.arg.string({ required: true }),
      birthDate: t.arg({ type: "DateTime", required: true }),
    },

    resolve: async (query, _parent, args, ctx) => {
      const { name, image, userId, gender, birthDate } = args;

      if (!(await ctx).user) {
        throw new Error("You have to be logged in to perform this action");
      }

      const user = await prisma.user.findUnique({
        where: { email: (await ctx).user?.email },
      });

      if (!user || user.role !== "ADMIN") {
        throw new Error("You don have permission ot perform this action");
      }

      const validatedGender: Gender | null | undefined = gender as
        | Gender
        | null
        | undefined;

      if (!validatedGender) {
        throw new Error("Gender is required");
      }

      return prisma.rabbit.create({
        ...query,
        data: {
          name,
          image,
          userId,
          gender: validatedGender,
          birthDate,
        },
      });
    },
  })
);
