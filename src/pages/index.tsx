import Head from "next/head";
import { App } from "../components/App";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chords exercise</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/guitar.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-900 to-black">
        <App />
      </main>
    </>
  );
};

export default Home;
