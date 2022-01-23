import Connect from "../pages/connect";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl">BitResearch</h1>
      <Connect />
    </nav>
  );
}
