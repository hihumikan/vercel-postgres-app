import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {

  try {
    const data = await prisma.post.create({
      select: {
        id: true,
        title: true,
        description: true,
      },
      data: {
        title: "john doe",
        description: "description",
      },
    });

    return response.status(200).json({ data });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
