import ServicesListing from '@pages/About/components/ServicesListing';

const OverviewSection = () => {
  return (
    <section className='overview-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-3'>What I do</h2>
        <div className='section-intro mb-5'>
          I have more than 10 years experience building software for clients all
          over the world. Below is a quick overview of my main technical skill
          sets and technologies I use. Want to find out more about my
          experience? Check out my{' '}
          <a className='text-link' href='resume.html'>
            online resume
          </a>{' '}
          and{' '}
          <a className='text-link' href='portfolio.html'>
            project portfolio
          </a>
          .
        </div>
        <ServicesListing />
        <div className='text-center py-3'>
          <a href='services.html' className='btn btn-primary'>
            <i className='fas fa-arrow-alt-circle-right me-2'></i>Services &amp;
            Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
