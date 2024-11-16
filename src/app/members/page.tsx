interface Member {
  firstName: string;
  lastName: string;
}


// TODO: add real data
const members: Member[] = [
  { firstName: "Alice", lastName: "Johnson" },
  { firstName: "Bob", lastName: "Smith" },
  { firstName: "Carol", lastName: "Williams" },
  { firstName: "David", lastName: "Brown" },
  { firstName: "Eve", lastName: "Davis" },
];

export default function Page() {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Team Members</h1>
      <ul className="space-y-2">
        {members.map((member, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            {member.firstName} {member.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
}
