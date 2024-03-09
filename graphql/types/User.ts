import { builder } from "../builder";

const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN", "CLIENT"] as const,
});

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    email: t.exposeString("email"),
    image: t.exposeString("image", { nullable: true }),
    role: t.expose("role", { type: Role }),
  }),
});


builder.queryField("Users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query }),
  })
);

// builder.queryField("User", (t) =>

builder.mutationField("createUser", (t) =>
  t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      image: t.arg.string({ required: false }),
      role: t.arg({ type: Role, required: true }),
    },

    resolve: async (query, _parent, args, _ctx) => {
      const { name, email, image, role } = args;

      return prisma.user.create({
        ...query,
        data: {
          name,
          email,
          image,
          role,
        },
      });
    },
  })
);