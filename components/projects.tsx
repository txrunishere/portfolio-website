import { Heading } from "./heading";
import { ProjectCard } from "./project-card";

type SourceType = "website" | "github";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  stack: string[];
  source: {
    type: SourceType;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "POV",
    description:
      "A modern social media app that lets users create posts and engage by liking and saving content.",
    image: "/pov-show.png",
    stack: [],
    source: [
      {
        type: "github",
        href: "https://github.com/txrunishere/POV",
      },
    ],
  },
  {
    id: 2,
    name: "TagTrack",
    description:
      "A modern full-stack app for tracking and managing tagged items, featuring price charts and auto email alerts on price drops.",
    image: "/tagtrack-show.png",
    stack: [],
    source: [
      {
        type: "github",
        href: "https://github.com/txrunishere/tagtrack",
      },
    ],
  },
] as const;

export const Projects = () => {
  return (
    <div className="">
      <Heading>Projects</Heading>
      <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
