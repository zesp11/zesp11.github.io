import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts"; // Adjust path based on your project structure

interface PostData {
  title: string;
  date: string;
  contentHtml: string;
}

// redirect to 404 for non-existent static params
export const dynamicParams = false;

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  const post = await getPostData(postId);

  return (
    <article className="prose prose-dark">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPostIds();

  const returnedPosts = posts.map((post) => {
    return { id: post.id };
  });
  return returnedPosts;
}
