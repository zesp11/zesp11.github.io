import Image from "next/image";
import type { Member } from "../(nonMainPage)/czlonkowie/page";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface MemberCardProps {
  member: Member;
  isLeader: boolean;
}

export default function MemberCard({ member, isLeader }: MemberCardProps) {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-lg transition-transform duration-300 
        ${isLeader
          ? "border-4 border-black dark:border-white"
          : "border border-gray-300 dark:border-gray-600"
        } 
        bg-white dark:bg-zinc-900
        shadow-md dark:shadow-xl
        hover:scale-[1.012] hover:shadow-xl
        bg-opacity-90 dark:bg-opacity-30
        `}
    >
      {/* Display the member's photo or a placeholder */}
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`${member.firstName} ${member.lastName}`}
          width={100}
          height={100}
          className="rounded-full transition-transform duration-300 hover:scale-110"
        />
      ) : (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-xl">
            {member.firstName[0]}
            {member.lastName[0]}
          </span>
        </div>
      )}
      {/* Name */}
      <h3 className="text-lg font-semibold mt-4 text-black dark:text-white transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300">
        {member.firstName} {member.lastName}
      </h3>
      {/* Icons */}
      <div className="flex gap-4 mt-2">
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white text-2xl transition-colors duration-300" size={32} />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors duration-300" size={32} />
          </a>
        )}
      </div>
    </div>
  );
}