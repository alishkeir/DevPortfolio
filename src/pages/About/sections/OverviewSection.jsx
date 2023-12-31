import ServicesListing from '@pages/About/components/ServicesListing';

const OverviewSection = () => {
  return (
    <section className='overview-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-3'>What I do</h2>
        <div className='section-intro mb-5'>
          With over three years of experience, I have actively contributed to
          software development projects for numerous companies globally.
          Here&apos;s a brief glimpse of my primary technical skills and the
          technologies I&apos;ve employed in my work.
          {/* <a className='text-link' href='portfolio.html'>
            project portfolio
          </a> */}
        </div>
        <ServicesListing />
      </div>
    </section>
  );
};

export default OverviewSection;
