import FeaturedProjectsListing from '@pages/About/components/FeaturedProjects';

const FeaturedSection = () => {
  return (
    <section className='featured-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-5'>
          Featured Projects
        </h2>
        <div className='row'>
          <FeaturedProjectsListing />
        </div>
        <div className='text-center py-3'>
          <a href='portfolio.html' className='btn btn-primary'>
            <i className='fas fa-arrow-alt-circle-right me-2'></i>View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
