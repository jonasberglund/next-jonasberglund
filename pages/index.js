import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800 dark:text-white">
      <Head>
        <title>Jonas Berglund</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold ">Jonas Berglund</h1>

        <p className="mt-3 text-2xl">UX/UI Designer & Front-End Developer</p>

        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 mt-4">
          Contact me
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        © {new Date().getFullYear()} Jonas Berglund
      </footer>
    </div>
  );
}
