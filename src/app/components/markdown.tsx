
export default function Markdown({ content }: { content: string }) {
  return (
    <article
      className="markdown-content my-10 prose prose-sm sm:prose-base md:prose-lg lg:max-w-4xl
          text-foreground
          /* Headers */
          [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:border-b-2 [&_h1]:pb-2 [&_h1]:border-accent [&_h1]:text-primary
          [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-primary [&_h2]:relative [&_h2]:pl-3
          [&_h2]:before:absolute [&_h2]:before:left-0 [&_h2]:before:w-1 [&_h2]:before:h-full [&_h2]:before:bg-accent
          [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-primary
          
          /* Lists - properly aligned arrows */
          [&_ul]:list-none [&_ul]:my-4 [&_ul>li]:relative [&_ul>li]:pl-6 
          [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.3em]
          [&_ul>li]:before:text-accent [&_ul>li]:before:content-['▹'] [&_ul>li]:before:mr-2
          [&_ul>li]:before:leading-none
          
          /* Rest of the styles */
          [&_p]:mb-4 [&_p]:leading-relaxed
          [&_a]:text-accent [&_a]:font-medium [&_a]:transition-all [&_a]:hover:underline [&_a]:underline-offset-4
          [&_strong]:font-bold [&_strong]:text-accent
          [&_ol]:my-4 [&_ol>li]:pl-6
          [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:bg-accent/10 [&_blockquote]:py-2 [&_blockquote]:my-6
          [&_code]:px-2 [&_code]:py-1 [&_code]:bg-accent/10 [&_code]:rounded-md [&_code]:border [&_code]:border-accent/20 [&_code]:text-accent
          [&_pre]:bg-accent/10 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-accent/20 [&_pre]:overflow-x-auto
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:border-none [&_pre_code]:text-foreground
          [&_hr]:border-accent [&_hr]:my-8 [&_hr]:opacity-30
          [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse
          dark:[&_th]:text-primary dark:[&_th]:bg-accent/20 [&_th]:bg-accent/10 [&_th]:text-left [&_th]:p-3 [&_th]:border [&_th]:border-accent/20
          [&_td]:p-3 [&_td]:border [&_td]:border-accent/20 [&_td]:text-sm
          [&_img]:rounded-lg [&_img]:border [&_img]:border-accent/20 [&_img]:my-6
          dark:[&_pre]:bg-accent/20 dark:[&_code]:bg-accent/30 dark:[&_blockquote]:bg-accent/20
          dark:[&_a]:hover:text-accent"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}