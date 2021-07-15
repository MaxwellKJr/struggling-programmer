import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home | The Truth Uncensored</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
