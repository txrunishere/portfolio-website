import Image from "next/image";
import { Heading } from "./heading";

export const Introduction = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <h1 className="font-space-grotesk text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
            <span className="bg-linear-to-b from-neutral-500/50 to-neutral-700 bg-clip-text font-bold text-transparent dark:from-neutral-50 dark:to-neutral-500">
              Hi, I'm Tarun
            </span>{" "}
            <span>👋</span>
          </h1>
          <p className="font-space-grotesk max-w-60 font-semibold text-neutral-500 md:max-w-full md:text-2xl dark:text-neutral-300">
            Full Stack Web Developer from India.
          </p>
        </div>
        <Image
          src={"/me.jpeg"}
          alt="me"
          width={120}
          height={120}
          className="size-24 rounded-full md:size-32"
        />
      </div>

      <div>
        <Heading>About</Heading>
        <p className="font-sans text-sm text-neutral-400">
          A passionate developer learning full-stack development. I love
          building projects with Javascript, Typescript, React, and backend
          technologies. I'm constantly improving my skills to become a better
          developer
        </p>
      </div>
    </div>
  );
};
