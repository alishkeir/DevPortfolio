import ProjectCard from '@components/ProjectCard';
import { projects } from '@db/about.json';

const ProjectsListing = () => {
  console.log(projects);
  return (
    <div className='project-cards row isotope'>
      {projects &&
        projects.map((project, index) => (
          <div
            key={index}
            className={`isotope-item col-md-6 mb-5 ${project.type}`}
          >
            <ProjectCard {...project} />
          </div>
        ))}
    </div>
  );
};

export default ProjectsListing;
