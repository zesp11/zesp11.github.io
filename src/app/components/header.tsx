import Link from "next/link";

const links = [
  { url: "/members", label: "Members" },
  { url: "/posts", label: "Posts" },
];

export default function Header() {
  return (
    <header className="border-b border-foreground flex justify-between items-center p-1">
      <Link className="p-1" href={"/"}>
        <div className="aspect-square h-6 bg-foreground rotate-[15deg]"></div>
      </Link>

      <nav className="flex gap-1 text-sm">
        {links.map((l, i) => (
          <Link
            href={l.url}
            key={i}
            className="px-2 rounded text-black bg-gray-300"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
