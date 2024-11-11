import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the structure of frontmatter data
interface PostData {
  id: string;
  title: string;
  date?: string;
  contentHtml: string;
  // [key: string]: any; // to allow additional frontmatter properties if needed
}



const postsDirectory = path.join(process.cwd(), 'posts');

if (!fs.existsSync(postsDirectory)) {
  throw new Error(`The directory '${postsDirectory.normalize()}' doesn't exists`);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data, // this should include title and other frontmatter properties
  } as PostData; // type assertion to PostData
}