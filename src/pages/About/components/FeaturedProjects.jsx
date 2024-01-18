import ProjectCard from '@components/ProjectCard';
import { projects } from '@db/about.json';

const FeaturedProjectsListing = () => {
  let featured = projects.filter((project) => project.featured);
  return (
    <>
      {featured &&
        featured.map((project, index) => (
          <div className='col-md-6 mb-5' key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
    </>
  );
};

export default FeaturedProjectsListing;
