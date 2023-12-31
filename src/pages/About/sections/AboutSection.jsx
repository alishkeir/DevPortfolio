import { FaFileLines, FaCircleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className='about-me-section p-3 p-lg-5 theme-bg-light'>
      <div className='container'>
        <div className='profile-teaser row'>
          <div className='col'>
            <h2 className='name font-weight-bold mb-1'>Ali Shokair</h2>
            <div className='tagline mb-3'>Software Engineer</div>
            <div className='bio mb-4'>
              I specialize in both frontend and backend development for
              intricate and scalable web applications. My expertise lies in
              software engineering, and I share insights on software development
              through my blog. Curious about how I can contribute to your
              project? Feel free to explore my project portfolio and online
              resume for more details.
            </div>
            <div className='d-flex'>
              <Link
                to='portfolio'
                className='btn btn-primary me-2 mb-3 d-flex justify-content-center align-items-center'
              >
                <FaCircleRight className='me-2' />
                <span className='d-none d-md-inline'>View</span> Portfolio
              </Link>

              <Link
                to='resume'
                className='btn btn-secondary mb-3 d-flex justify-content-center align-items-center'
              >
                <FaFileLines className='me-2' />
                <span className='d-none d-md-inline'>View</span> Resume
              </Link>
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
