import { env } from "@/env";
import { fetcher } from "../helpers/fetchers";

export default async function deletePost(id: string) {
  await fetcher(`${env.API_BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
}
