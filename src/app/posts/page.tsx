import { Suspense } from "react";
import { Link } from "@/components/link";
import PostsList, { Loading } from "./_components/posts-list";

export default async function Posts() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h1>Posts</h1>

        <Link href="/posts/create" variant="filled">
          + Create New Post
        </Link>
      </div>

      <Suspense fallback={<Loading />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
