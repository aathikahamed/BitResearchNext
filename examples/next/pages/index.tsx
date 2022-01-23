import Connect from "./connect";
import Hooks from "./hooks";
import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function () {
  const { address } = useWeb3();
  const router = useRouter();

  useEffect(() => {
    console.log(address);
    if (address) {
      router.push("/home");
    }
  }, [address, router]);

  return (
    <>
      <Hooks />
      <div className="bg-mesh w-full h-screen">
        <div className="max-w-6xl mx-auto px-10 pt-10 h-5/6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl">BitResearch</h1>
            <Connect />
          </nav>
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-center leading-tight">
              A place to appreciate interesting, independent research
            </h1>
            <h2 className="text-2xl font-semibold text-center mt-4">
              Completely runs on decentralized network
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
