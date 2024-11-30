import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

export default async function Page() {
  // Read markdown file
  const filePath = path.join(process.cwd(), 'descriptions', 'opis.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Convert markdown to HTML
  const processedContent = await remark().use(gfm).use(html).process(fileContent);
  const contentHtml = processedContent.toString();

  return (
    <div className='flex justify-center my-4'>
      <article
        className="prose prose-sm sm:prose-base dark:prose-invert lg:max-w-2xl"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      >
      </article>
    </div>
  );
}