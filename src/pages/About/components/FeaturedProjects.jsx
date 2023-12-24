import ProjectCard from '@components/ProjectCard';

const FeaturedProjectsListing = () => {
  return (
    <>
      <div className='col-md-6 mb-5'>
        <ProjectCard />
      </div>
      <div className='col-md-6 mb-5'>
        <ProjectCard />
      </div>
      <div className='col-md-6 mb-5'>
        <ProjectCard />
      </div>
      <div className='col-md-6 mb-5'>
        <ProjectCard />
      </div>
    </>
  );
};

export default FeaturedProjectsListing;
