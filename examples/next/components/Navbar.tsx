import Link from "next/link";
import Connect from "../pages/connect";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl cursor-pointer">BitResearch</h1>
      </Link>
      <Connect />
    </nav>
  );
}
