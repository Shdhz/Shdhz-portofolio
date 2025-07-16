type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 transition-transform duration-300 hover:scale-[1.02] hover:border-white/20">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FFD372] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#FFD372] hover:text-white transition-colors"
        >
          <span>Lihat Proyek</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
