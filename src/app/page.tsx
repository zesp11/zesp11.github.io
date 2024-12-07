import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';
import ToolsUsed from './components/toolsSection';

export default async function Page() {
  return (
    <main>
      <div className='mt-8'/>
    </main>
  );
}