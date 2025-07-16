import ProjectCard from "@/app/components/projectCard";
import { allProjects } from "@/app/data/projects";


export default function ProjectsSection({ limit }: { limit?: number }) {
  const displayedProjects = limit ? allProjects.slice(0, limit) : allProjects;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}