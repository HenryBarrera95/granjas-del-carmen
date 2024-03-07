import { builder } from "../builder";

builder.prismaObject("Rabbit", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    image: t.exposeString("image", { nullable: true }),
    // birthDate: t.expose("birthDate", { type: Date }),
    gender: t.exposeString("gender"),
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
