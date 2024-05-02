import { builder } from "../builder";

builder.prismaObject("Client", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
  }),
});

builder.queryField("Clients", (t) =>
  t.prismaField({
    type: ["Client"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.client.findMany({ ...query }),
  })
);

builder.mutationField("createClient", (t) =>
  t.prismaField({
    type: "Client",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, _ctx) => {
      const { name, email } = args;

      return prisma.client.create({
        ...query,
        data: {
          name,
          email,
        },
      });
    },
  })
);
