import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-col bg-[#f7146b] text-white p-4 flex justify-center items-center">
      <h1 className="mb-2 text-2xl">Checkpoint : frontend</h1>
      <Link className="hover:underline" href="/">Countries</Link>
    </header>
  );
}
