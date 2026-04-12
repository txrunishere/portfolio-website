import { Introduction } from "@/components/introduction";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-4 pt-10 pb-20 sm:py-20">
      <BlurFade className="flex flex-col gap-6">
        <Introduction />

        <Skills />

        <Projects />
      </BlurFade>
    </div>
  );
}
