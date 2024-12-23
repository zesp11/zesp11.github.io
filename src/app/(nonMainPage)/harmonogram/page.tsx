import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

export default async function Page() {
  // Read markdown file
  const filePath = path.join(process.cwd(), 'descriptions', 'harmonogram.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(fileContent);
  const contentHtml = processedContent.toString();

  return (
    <div className='container mx-auto my-4'>
      <div className='flex justify-center'>
        <article
          className="markdown-content my-10 prose prose-sm sm:prose-base lg:max-w-2xl 
          text-foreground
            [&_ul>li::marker]:text-accent
            [&_ol>li::marker]:text-accent
            [&_b]:text-accent
            [&_hr]:border-accent"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div >
  );
}