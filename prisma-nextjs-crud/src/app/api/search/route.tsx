// url /api/search/12121
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  try {
    const posts = await client.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: String(query),
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: String(query),
              mode: "insensitive",
            },
          },
        ],
      },
    });
    if (!posts) {
      return NextResponse.json({ message: "POST not found" }, { status: 404 });
    }
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "POST error", error }, { status: 500 });
  }
};
