import { useWeb3 } from "@3rdweb/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DownloadIcon from "../../assets/download_icon.svg";
import ProfileIcon from "../../assets/profile_icon.svg";
import Navbar from "../../components/Navbar";
import { data } from "./data";

const HomePage = () => {
  const { address } = useWeb3();
  const router = useRouter();

  useEffect(() => {
    console.log(address);
    if (!address) {
      router.push("/");
    }
  }, [address, router]);

  return (
    <div className="max-w-7xl px-10 mx-auto mt-4">
      <Navbar />

      <div className="grid grid-cols-1 mt-10 gap-6 xl:grid-cols-2">
        {data.map((item) => (
          <div key={item.id} className="flex rounded-3xl shadow-light gap-4">
            <img
              className="w-44 h-64 rounded-3xl"
              src={item.imageUrl}
              alt="paper"
            />
            <div className="flex h-full flex-col justify-evenly pr-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
              <div className="flex gap-4">
                <Link href={item.researchPaperUrl}>
                  <a className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                    <Image src={DownloadIcon} alt="download" />
                    <span>Download PDF</span>
                  </a>
                </Link>
                <Link href={`/profile/${item.authorId}`}>
                  <a
                    href={`/profile/${item.authorId}`}
                    className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2"
                  >
                    <Image src={ProfileIcon} alt="profile" />
                    View Author
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
