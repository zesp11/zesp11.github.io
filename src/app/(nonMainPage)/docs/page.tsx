import Markdown from "@/app/components/markdown";
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

export default async function Page() {
  const content = `
  # Informacja o dokumentacji
  
  Dokumentacja projektu zostanie opublikowana po zakończeniu prac nad projektem. 
  Szczegóły techniczne i procesowe będą dostępne w finalnej wersji dokumentacji.
  
  ## Raporty projektu
  
  - **Raport semestralny** zostanie udostępniony w trakcie trwania prac nad projektem.
  - **Raport końcowy** zostanie opublikowany po zakończeniu projektu.
  
  Szczegółowe informacje będą dostępne w odpowiednich raportach.
    `;
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();



  return (
    <div className='container mx-auto my-4'>
      <div className='flex justify-center'>
        <Markdown content={contentHtml} />
      </div>
    </div>
  );


}