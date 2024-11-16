import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Define the structure of frontmatter data
const postsDirectory = path.join(process.cwd(), "posts");

// Define the type for a single post's metadata
interface PostMetadata {
  title: string;
  date: string;
  excerpt?: string;
  [key: string]: any; // For any additional metadata fields
}

// Define the type for a single post's data
interface PostData extends PostMetadata {
  id: string;
  contentHtml: string; // Added for the content in HTML format
}

/**
 * Get all post IDs based on filenames in the posts directory.
 * Each ID corresponds to the filename (without the .md extension).
 * This is used for dynamic routing in Next.js.
 */
export function getAllPostIds(): { id: string }[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    id: filename.replace(/\.md$/, ""), // Remove the .md extension
  }));
}

/**
 * Get sorted metadata of all posts.
 * This function reads each markdown file in the directory,
 * extracts front matter using gray-matter, and sorts posts by date.
 */
export function getSortedPostsData(): PostData[] {
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData: PostData[] = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, ""); // Get ID from filename
    const filePath = path.join(postsDirectory, filename); // Full path to the file
    const fileContents = fs.readFileSync(filePath, "utf8"); // Read file content

    // Extract front matter (metadata) using gray-matter
    const { data } = matter(fileContents);

    return {
      id,
      ...(data as PostMetadata), // Explicitly cast to PostMetadata
    };
  });

  // Sort posts by date (newest first)
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Get the content and metadata for a specific post.
 * This function reads the markdown file, parses the metadata,
 * converts markdown to HTML, and returns the result.
 *
 * @param {string} id - The ID of the post (from filename).
 * @returns {Promise<PostData>} - The post data including contentHtml and metadata.
 */
export async function getPostData(id: string): Promise<PostData> {
  const filePath = path.join(postsDirectory, `${id}.md`); // Path to the specific markdown file
  const fileContents = fs.readFileSync(filePath, "utf8"); // Read file content

  // Extract front matter (metadata) and content using gray-matter
  const { data, content } = matter(fileContents);

  // Convert markdown content to HTML using remark
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id, // Include ID
    contentHtml, // HTML content
    ...(data as PostMetadata), // Explicitly cast to PostMetadata
  };
}
