import projects from '../data/projects.json';
import Project from '../components/Project';

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">All My Projects</h1>
      <div className="space-y-4">
        {projects.map((project: any) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}
