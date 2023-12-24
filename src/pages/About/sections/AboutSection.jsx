import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = () => {
  return (
    <section className='about-me-section p-3 p-lg-5 theme-bg-light'>
      <div className='container'>
        <div className='profile-teaser row'>
          <div className='col'>
            <h2 className='name font-weight-bold mb-1'>Simon Doe</h2>
            <div className='tagline mb-3'>Senior Software Engineer</div>
            <div className='bio mb-4'>
              I&apos;m a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on{' '}
              <a className='text-link' href='blog-home.html'>
                my blog
              </a>
              . Want to know how I may help your project? Check out my project{' '}
              <a className='text-link' href='projects.html'>
                portfolio
              </a>{' '}
              and{' '}
              <a className='text-link' href='resume.html'>
                online resume
              </a>
              .
            </div>
            <div className='mb-4'>
              <a className='btn btn-primary me-2 mb-3' href='portfolio.html'>
                {/* <i className='fas fa-arrow-alt-circle-right me-2'></i> */}
                <FontAwesomeIcon
                  icon='fa-solid fa-circle-right'
                  className='me-2'
                />
                <span className='d-none d-md-inline'>View</span> Portfolio
              </a>
              <a className='btn btn-secondary mb-3' href='resume.html'>
                <FontAwesomeIcon
                  icon='fa-solid fa-file-lines'
                  className='me-2'
                />
                <span className='d-none d-md-inline'>View</span> Resume
              </a>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <img
              className='profile-image img-fluid mb-3 mb-lg-0 me-md-0'
              src='assets/images/profile-lg.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
