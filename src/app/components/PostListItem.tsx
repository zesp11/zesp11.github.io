interface Post {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
}

export default function PostItem({ post }: { post: Post }) {
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{post.date}</p>
        <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-end">
          <div className="inline-block mt-4 text-blue-600  hover:underline font-semibold justify-end">
            Read More →
          </div>
        </div>
      </div>
    </article>
  );
}
