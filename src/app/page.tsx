import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white">
      <Head>
        <title>JournAI Landing Page</title>
        <meta name="description" content="Landing page for JournAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full md:w-1/2 text-center md:text-left px-8 md:px-20">
        <h1 className="text-6xl font-bold mb-4">
          Journ AI{" "}
          <span role="img" aria-label="Writing Hand">
            ✍️
          </span>
        </h1>
        <p className="mt-3 text-2xl">
          using your stories to find out more about you
        </p>
        <p className="mt-1 text-xl">coming soon...</p>

        {/* <div className="mt-8 w-full max-w-md">
          <p className="text-lg mb-4">sign up for our mailing list</p>
          <form className="flex flex-col items-center w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 mb-4 text-gray-900 rounded-md"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div> */}
      </main>

      <div className="flex justify-center md:justify-start items-center w-full md:w-1/2 mt-12 md:mt-0 px-8">
        <Image
          src="iphone.svg" // Make sure to use the correct path to your image
          alt="JournAI Preview"
          width={1000}
          height={1000}
          className="m-4"
        />
      </div>
    </div>
  );
}
