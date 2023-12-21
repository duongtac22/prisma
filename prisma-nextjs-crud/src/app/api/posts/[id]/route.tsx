// url /api/posts/12121
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: { params: any }) => {
  try {
    const { id } = params;
    const posts = await client.post.findUnique({
      where: {
        id: String(id),
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
