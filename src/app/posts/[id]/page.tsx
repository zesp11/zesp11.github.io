interface Post {
  slug: number;
}

interface Params {
  id: string;
}

export const dynamicParams = false

export async function generateStaticParams() {
  const posts: Post[] = [
    { slug: 1, },
    { slug: 2, },
    { slug: 3, },
    { slug: 4, },
  ]

  return posts.map((post) => ({
    id: post.slug.toString(),
  }))
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  return (
    <>
      This is page for post with id {id}
    </>
  );
}