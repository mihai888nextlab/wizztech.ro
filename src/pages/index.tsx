import Image from "next/image";

export default function Home() {
  return (
    <>
      <video
        src="bg-video.webm"
        autoPlay
        muted
        loop
        className="fixed right-0 bottom-0 min-w-screen min-h-screen z-10 object-cover"
      ></video>
      <div className="fixed bg-black bg-opacity-50 w-full h-screen flex items-center justify-center flex-col z-20">
        <Image width={307.66} height={41.5} src="/text.png" alt="" />
        <h1 className="text-white font-bold text-5xl">COMING SOON</h1>
        <p className="text-white text-xl">
          Made by{" "}
          <a
            href="https://devmgo.com/"
            className="text-green-500 hover:underline"
          >
            devmgo.ro
          </a>
        </p>
      </div>
    </>
  );
}
