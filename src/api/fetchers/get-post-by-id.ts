import { postSchema } from "@/types/post";
import { fetcher } from "../helpers/fetchers";

export default async function getPostById(id: string) {
  const post = await fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    next: {
      tags: ["all", "posts", `post-${id}`],
    },
  });

  const parsedPost = postSchema.safeParse(post);

  if (!parsedPost.success) {
    throw new Error("Failed to parse post");
  }

  return parsedPost.data;
}
