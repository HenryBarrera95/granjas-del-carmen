const { NextResponse } = require("next/server");
import bcrypt from "bcrypt";
import db from "@/libs/prisma";

export async function POST(request) {
  const data = await request.json();

  const emailFound = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  const usernameFound = await db.user.findUnique({
    where: {
      username: data.username,
    },
  });

  if (emailFound) {
    return NextResponse.json(
      {
        message: "Email already exists",
      },
      {
        status: 400,
      }
    );
  }

  if (usernameFound) {
    return NextResponse.json(
      {
        message: "Ussername already exists",
      },
      {
        status: 400,
      }
    );
  }

  console.log(data);
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const newUser = await db.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(newUser);
}
