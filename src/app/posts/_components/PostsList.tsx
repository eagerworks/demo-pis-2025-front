import { LoaderIcon } from "lucide-react";
import getPosts from "@/api/fetchers/getPosts";
import { Link } from "@/components/Link";

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} variant="link">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Loading() {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col">
      <LoaderIcon className="size-5 animate-spin" />
    </div>
  );
}
