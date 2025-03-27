import projects from '../data/projects.json';
import Project from '../components/Project';
import { ProjectData } from '../interfaces/projectData';

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">All My Projects</h1>
      <div className="space-y-4">
        {projects.map((project: ProjectData) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
