import Image from "next/image";
import type { Member } from "../czlonkowie/page";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface MemberCardProps {
  member: Member;
  isLeader: boolean;
}

export default function MemberCard({ member, isLeader }: MemberCardProps) {
  return (
    <div
      className={`flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition-transform duration-300 ${
        isLeader ? "border-4 border-black" : "border border-gray-300"
      } hover:scale-105 hover:shadow-xl`}
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
        <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center">
          <span className="text-gray-500 text-xl">
            {member.firstName[0]}
            {member.lastName[0]}
          </span>
        </div>
      )}
      {/* Name */}
      <h3 className="text-lg font-semibold mt-4 text-black transition-colors duration-300 hover:text-gray-700">
        {member.firstName} {member.lastName}
      </h3>
      {/* Icons */}
      <div className="flex gap-4 mt-2">
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-gray-700 hover:text-black text-2xl transition-colors duration-300" size={32} />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-gray-700 hover:text-blue-600 text-2xl transition-colors duration-300" size={32} />
          </a>
        )}
      </div>
    </div>
  );
}