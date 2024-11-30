import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts"; // Adjust the path based on your project structure
import PostItem from "../../components/PostListItem";

// TODO: specify types in one place
export default async function ListMultiplePost() {
  const allPostsData = await getSortedPostsData();

  return (
    // TODO: add sorting by latest etc
    <section className="p-1">
      <ul className="space-y-4 sm:space-y-6 flex items-center flex-col">
        {allPostsData.map((post) => (
          <li 
          key={post.id}
          className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          >
            <Link href={`/posty/${post.id}`}>
              <PostItem post={post}/>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
