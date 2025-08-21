import { env } from "@/env";
import { postSchema } from "@/types/post";
import { fetcher } from "../helpers/fetchers";

const responseSchema = postSchema.array();

export default async function getPosts() {
  const posts = await fetcher(`${env.API_BASE_URL}/posts`, {
    method: "GET",
    next: {
      tags: ["all", "posts"],
    },
  });

  const parsedPosts = responseSchema.safeParse(posts);

  if (!parsedPosts.success) {
    throw new Error("Failed to parse posts");
  }

  return parsedPosts.data;
}
