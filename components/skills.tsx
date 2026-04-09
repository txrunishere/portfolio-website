import { Heading } from "./heading";

export const Skills = () => {
  const skills: string[] = [
    "Javascript",
    "Typescript",
    "Java",
    "Python",
    "FastAPI",
    "Nodejs",
    "Express",
    "React",
    "Nextjs",
    "TailwindCSS",
    "Supabase",
    "PostgresSQL",
    "MySQL",
    "MongoDB",
    "Prisma",
    "Drizzle ORM",
    "Docker",
    "CI/CD",
  ];

  return (
    <div>
      <Heading>Skills</Heading>
      <div className="font-space-grotesk mt-2 flex flex-wrap gap-2 leading-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-sm bg-neutral-900 px-1.5 py-1 text-sm text-gray-50"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
