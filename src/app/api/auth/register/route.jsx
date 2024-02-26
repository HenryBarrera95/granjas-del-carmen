const { NextResponse } = require("next/server");
import bcrypt from "bcrypt";
import db from "@/libs/prisma";

export async function POST(request) {
  try {
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

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });
    const { password: _, ...user } = newUser;
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
