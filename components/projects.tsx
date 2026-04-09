import { Heading } from "./heading";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  stack: string[];
};

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "POV",
      description:
        "A modern social media app that lets users create posts and engage by liking and saving content.",
      image: "./pov-show.png",
      stack: [],
    },
    {
      id: 2,
      name: "TagTrack",
      description:
        "A modern full-stack app for tracking and managing tagged items, featuring price charts and auto email alerts on price drops.",
      image: "./tagtrack-show.png",
      stack: [],
    },
  ];

  return (
    <div className="">
      <Heading>Projects</Heading>
      <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="h-full rounded-lg border-2 border-neutral-800 bg-neutral-900 p-2"
          >
            <div className="h-40 w-full overflow-hidden rounded-md">
              <img
                className="h-full w-full object-cover object-top"
                src={project.image}
                alt={`${project.name}-img`}
              />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <p className="text-sm text-neutral-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
