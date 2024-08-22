import Image from "next/image";
import Heropage from "./components/heropage";
import Features from "./components/features";

export default function Home() {
  return (
    <main className="">
        <Heropage />
        <Features />
    </main>
  );
}
