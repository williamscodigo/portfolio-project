export default function Project({ project } : any) {
  return (
    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
      <h2 className="text-xl font-bold">Project Name:  {project.title}</h2>
      <p className="mt-2"><span className="font-bold">Short Description: </span> {project.description}</p>
      <p className="mt-2"><span className="font-bold">Technologies: </span> {project.technologies.join(', ')}</p>
      <div className="inline-flex gap-x-6 mt-2">
      <a
        href={project.projectLink}
        className={`text-blue-500 dark:text-blue-400 ${project.projectLink ? 'hover:cursor-pointer hover:underline' : 'cursor-not-allowed'}`}
        target="_blank"
      >
        Live Project
      </a>
      <a
        href={project.codeLink}
        className="text-blue-500 dark:text-blue-400 hover:underline hover:cursor-pointer"
        target="_blank"
      >
        Github Code
      </a>
      </div>
    </div>
  );
}
