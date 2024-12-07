import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';
import ToolsUsed from './components/toolsSection';

export default async function Page() {
  // Read markdown file
  const filePath = path.join(process.cwd(), 'descriptions', 'opis.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Convert markdown to HTML
  const processedContent = await remark().use(gfm).use(html).process(fileContent);
  const contentHtml = processedContent.toString();

  return (
    <div className='container mx-auto my-4'>
      <div className='flex justify-center'>
        <article
          className="my-10 prose dark:prose-invert prose-sm sm:prose-base lg:max-w-2xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          style={
            {
              '--tw-prose-bullets': '#ffffff'
            } as React.CSSProperties & Record<string, string>
          }
        >
        </article>
      </div>

      <ToolsUsed />
    </div >
  );
}