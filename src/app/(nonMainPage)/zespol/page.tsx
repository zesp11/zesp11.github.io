import MouseTrail from '@/app/components/blurryMouseTrail';
import MemberCard from '@/app/components/memberCard';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

export interface Member {
  firstName: string;
  lastName: string;
  photo: string | null;
  github: string | null;
  linkedin: string | null;
}

// TODO: add real data
const members: Member[] = [
  {
    firstName: "Agnieszka",
    lastName: "Uznańska",
    photo: null,
    github: null,
    linkedin: 'https://linkedin.com/in/agnieszkauznanska',
  },
  {
    firstName: "Franciszek",
    lastName: "Szary",
    photo: null,
    github: "https://github.com/FranciszekSzary1",
    linkedin: null,
  },
  {
    firstName: "Cezary",
    lastName: "Arszyński",
    photo: null,
    github: "https://github.com/Delfin22",
    linkedin: null,
  },
  {
    firstName: "Igor",
    lastName: "Jeziorski",
    photo: null,
    github: 'https://github.com/IgoRix08',
    linkedin: null,
  },
  {
    firstName: "Kamil",
    lastName: "Konarzewski",
    photo: null,
    github: "https://github.com/K4-mil",
    linkedin: null,
  },
  {
    firstName: "Paweł",
    lastName: "Charysz",
    photo: null,
    github: "https://github.com/Erdahil",
    linkedin: null,
  },
  {
    firstName: "Kacper",
    lastName: "Urbański",
    photo: null,
    github: "https://github.com/Serp-ent",
    linkedin: null,
  },
];

const TEAM_LEADER = 0;

export default async function Page() {
  const filePath = path.join(process.cwd(), 'descriptions', 'zespol.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Convert markdown to HTML
  const processedContent = await remark().use(gfm).use(html).process(fileContent);
  const contentHtml = processedContent.toString();


  return (
    <>
      <MouseTrail />
      <section className="p-1 mt-10 mx-auto sm:max-w-4xl">
        <div className="flex justify-center">
          <h1 className="z-10 text-2xl font-bold mb-4">Zespół XI</h1>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative">
          {/* Render the team leader at the center */}
          <div className="sm:col-start-2 sm:-left-1/2 md:col-start-2 md:col-span-2 md:-left-1/4 relative">
            <MemberCard member={members[TEAM_LEADER]} isLeader={true} />
          </div>

          {/* Render the rest of the members */}
          {members
            .filter((_, index) => index !== TEAM_LEADER)
            .map((member, index) => (
              <MemberCard key={index} member={member} isLeader={false} />
            ))}
        </div>
      </section>
      <section className='container mx-auto my-4 z-10'>
        <div className='flex justify-center'>
          <article
            className="z-10 markdown-content my-10 prose prose-sm sm:prose-base lg:max-w-2xl 
          text-foreground
            [&_ul>li::marker]:text-accent
            [&_ol>li::marker]:text-accent
            [&_b]:text-accent
            [&_hr]:border-accent"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
    </>
  );
}