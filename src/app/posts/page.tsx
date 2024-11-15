import { GetStaticProps } from "next";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts"; // Adjust the path based on your project structure

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
}

interface PostsPageProps {
  allPostsData: Post[];
}

export default async function ListMultiplePost() {
  const allPostsData = await getSortedPostsData();

  return (
    <section className="p-2">
      <h1>All Posts</h1>
      <ul>
        {allPostsData.map(({ id, title, date, excerpt }) => (
          <li key={id}>
            <article>
              <h2>
                <Link 
                href={`/posts/${id}`}
                className="border p-1"
                >{title}</Link>
              </h2>
              <p>{date}</p>
              {excerpt && <p>{excerpt}</p>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}