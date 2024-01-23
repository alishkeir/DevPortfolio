import ServicesListing from '@pages/About/components/ServicesListing';
import { PropTypes } from 'prop-types';

const OverviewSection = ({ services_headline }) => {
  return (
    <section className='overview-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-3'>What I do</h2>
        <div className='section-intro mb-5'>
          {services_headline}
          {/* <a className='text-link' href='portfolio.html'>
            project portfolio
          </a> */}
        </div>
        <ServicesListing />
      </div>
    </section>
  );
};

OverviewSection.propTypes = {
  services_headline: PropTypes.string.isRequired,
};

export default OverviewSection;
