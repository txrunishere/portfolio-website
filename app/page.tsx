import { Introduction } from "@/components/introduction";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { BlurFade } from "@/components/ui/blur-fade";
import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:py-20">
      <BlurFade className="flex flex-col gap-6">
        <Introduction />

        <div>
          <GitHubCalendar username="txrunishere" colorScheme="dark" />
        </div>

        <Skills />

        <Projects />
      </BlurFade>
    </div>
  );
}
