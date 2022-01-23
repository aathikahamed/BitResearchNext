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
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
    setUser(users.find((person) => person.id === router.query.id));
  }, [address, router]);

  return (
    <div className="max-w-7xl px-10 mx-auto pt-4">
      <Navbar />
      {user && (
        <div className="mt-16">
          <img src={user.imageUrl} className="w-36 h-36 rounded-2xl" />
          <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
          <p className="text-gray-600">{user.about}</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-100 mt-4 p-3 rounded-lg hover:bg-blue-200"
          >
            Fund Researcher 🤗
          </button>
        </div>
      )}
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Donate</h3>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed w-96">
                    Enter amount to donate:
                  </p>
                  <input
                    className="px-3 py-3 border rounded-lg"
                    type="text"
                    placeholder="Coins"
                  />
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};
export default ProfilePage;
