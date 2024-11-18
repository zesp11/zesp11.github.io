import AnimatedCard from "../components/animatedCard";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

interface Member {
  firstName: string;
  lastName: string;
  photo: string | null;
  github: string | null;
  linkedin: string | null;
}

// TODO: add real data
const members: Member[] = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    photo: null, // Replace with real image URLs
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    photo: null,
    github: "https://github.com",
    linkedin: null,
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    photo: null,
    github: null,
    linkedin: "https://linkedin.com",
  },
  {
    firstName: "David",
    lastName: "Brown",
    photo: null,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    firstName: "Eve",
    lastName: "Davis",
    photo: null,
    github: "https://github.com",
    linkedin: null,
  },
];

export default function Page() {
  return (
    <section className="p-6 text-gray-800 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Team Members</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <li key={index}>
            <AnimatedCard direction={`${index % 2 === 0 ? "left" : "right"}`}>
              <div className="bg-white shadow rounded overflow-hidden">
                <div
                  className="w-full h-40 bg-gray-300"
                  style={{
                    backgroundColor: "#ccc", // Simulated photo background color
                  }}
                ></div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">
                    {member.firstName} {member.lastName}
                  </h2>
                  <div className="flex justify-center items-center mt-2 space-x-3">
                    {member.github && member.github !== null && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <AiFillGithub size={30}/>
                      </a>
                    )}
                    {member.linkedin && member.linkedin !== null && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <AiFillLinkedin size={30} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
