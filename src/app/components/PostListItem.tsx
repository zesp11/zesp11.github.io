interface Post {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
}

export default function PostItem({ post }: { post: Post }) {
  return (
    <article className="shadow-lg dark:shadow-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
        
        {/* Date */}
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{post.date}</p>
        
        {/* Excerpt */}
        <p className="line-clamp-3 text-gray-800 dark:text-gray-300">{post.excerpt}</p>
        
        {/* Read More Link */}
        <div className="flex justify-end">
          <div className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-semibold">
            Read More →
          </div>
        </div>
      </div>
    </article>
  );
}