import {
  FaBlog,
  FaBriefcase,
  FaCodepen,
  FaEnvelopeOpenText,
  FaFileLines,
  FaGithub,
  FaLaptopCode,
  FaLinkedinIn,
  FaPaperPlane,
  FaStackOverflow,
  FaSun,
  FaTwitter,
  FaUser,
} from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='header text-center'>
      <div className='force-overflow'>
        <h1 className='blog-name pt-lg-4 mb-0'>
          <a className='no-text-decoration' href='index.html'>
            Simon Doe
          </a>
        </h1>

        <nav className='navbar navbar-expand-lg navbar-dark'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navigation'
            aria-controls='navigation'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div id='navigation' className='collapse navbar-collapse flex-column'>
            <div className='profile-section pt-3 pt-lg-0'>
              <img
                className='profile-image mb-3 rounded-circle mx-auto'
                src='assets/images/profile.png'
                alt='image'
              />

              <div className='bio mb-3'>
                Hi, my name is Simon Doe and I&apos;m a senior software
                engineer. Welcome to my personal website!
              </div>
              <ul className='social-list list-inline py-2 mx-auto'>
                <li className='list-inline-item'>
                  <a href='#'>
                    <FaTwitter />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <FaGithub />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <FaStackOverflow />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <FaCodepen />
                  </a>
                </li>
              </ul>
            </div>

            <ul className='navbar-nav flex-column text-start'>
              <li className='nav-item'>
                <a className='nav-link active' href='index.html'>
                  <FaUser className='me-2' />
                  About Me
                  {/* <span className='sr-only'>(current)</span> */}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='portfolio.html'>
                  <FaLaptopCode className='me-2' />
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='services.html'>
                  <FaBriefcase className='me-2' />
                  Services &amp; Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='resume.html'>
                  <FaFileLines className='me-2' />
                  Resume
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='blog-home.html'>
                  <FaBlog className='me-2' />
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='contact.html'>
                  <FaEnvelopeOpenText className='me-2' />
                  Contact
                </a>
              </li>
            </ul>

            <div className='mb-2 mt-4'>
              <a
                className='btn btn-primary'
                href='contact.html'
                target='_blank'
                rel='noreferrer'
              >
                <FaPaperPlane className='me-2' />
                Hire Me
              </a>
            </div>

            <div className='dark-mode-toggle text-center w-100'>
              <h4 className='toggle-name mb-3 mt-4 '>
                <i className='fas fa-adjust me-1'></i>
                <FaSun className='me-1' />
                Dark Mode
              </h4>

              <input className='toggle' id='darkmode' type='checkbox' />
              <label
                className='toggle-btn mx-auto mb-0'
                htmlFor='darkmode'
              ></label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
