import FeaturedProjectsListing from '@pages/About/components/FeaturedProjects';
import { FaCircleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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
          <Link to='portfolio' className='btn btn-primary'>
            <FaCircleRight className='me-2' />
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
