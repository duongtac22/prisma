import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// url /api/register
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const existingUser = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const newUser = await client.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json(
      {
        user: newUser,
        message: " User created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "auth/user POST error", error },
      { status: 500 }
    );
  }
}

export async function LOGIN(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const user = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: `No user found for email: ${email}`,
        },
        { status: 401 }
      );
    }
    const isPasswordValid = user.password === password;
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: `Passwrod invalid`,
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        user: email,
        message: " User signin successfully",
      },
      { status: 200 }
    );
  } catch (error) {}
}
