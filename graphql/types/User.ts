// import { Role } from "@prisma/client";
import { builder } from "../builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    email: t.exposeString("email"),
    // emailVerified: t.expose("emailVerified", { nullable: true, type: Date }),
    image: t.exposeString("image", { nullable: true }),
    role: t.expose("role", { type: Role }),
  }),
});

const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN", "CLIENT"] as const,
});
