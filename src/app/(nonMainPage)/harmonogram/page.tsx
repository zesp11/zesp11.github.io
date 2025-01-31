import Markdown from '@/app/components/markdown';
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
        <Markdown content={contentHtml}/>
      </div>
    </div >
  );
}