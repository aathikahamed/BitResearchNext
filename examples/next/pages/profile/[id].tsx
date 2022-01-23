import { useWeb3 } from "@3rdweb/hooks";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { users } from "./users";

interface User {
  id: string;
  name: string;
  blockChainAddress: string;
  about: string;
  imageUrl: string;
}

const ProfilePage = () => {
  const { address } = useWeb3();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
    setUser(users.find((person) => person.id === router.query.id));
  }, [address, router]);

  return (
    <div className="max-w-7xl px-10 mx-auto mt-4">
      <Navbar />
      {user && (
        <div className="mt-16">
          <img src={user.imageUrl} className="w-36 h-36 rounded-2xl" />
          <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
          <p className="text-gray-600">{user.about}</p>
          <button className="bg-blue-100 mt-4 p-3 rounded-lg hover:bg-blue-200">
            Fund Researcher 🤗
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfilePage;
