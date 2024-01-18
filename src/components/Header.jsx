import { useEffect, useState } from 'react';
import {
  FaBlog,
  FaCodepen,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaFileLines,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaLinkedinIn,
  FaPaperPlane,
  FaSun,
  FaUser,
} from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark_mode') == 'true'
  );

  useEffect(() => {
    if (localStorage.getItem('dark_mode')) {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }
  }, [darkMode]);

  const toggleTheme = (e) => {
    setDarkMode(e.target.checked);

    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark_mode', true);
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.removeItem('dark_mode');
    }
  };

  return (
    <header className='header text-center'>
      <div className='force-overflow'>
        <h1 className='blog-name pt-lg-4 mb-0'>
          <a className='no-text-decoration' href='index.html'>
            Ali Shokair
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
                src='https://gravatar.com/userimage/183874599/53d05717042f75520286f0d8d1479bcc.jpeg?size=256'
                alt='Ali Shokair'
              />

              <div className='bio mb-3'>
                Hi, my name is Ali Shokair and I&apos;m a mid software engineer.
                Welcome to my personal website & portfolio!
              </div>
              <ul className='social-list list-inline py-2 mx-auto'>
                <li className='list-inline-item'>
                  <a
                    href='https://www.linkedin.com/in/alishkeir/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://github.com/alishkeir/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://www.instagram.com/alishkeir_'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://codepen.io/alishkeir/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaCodepen />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='mailto:alishkeir_@hotmail.com'>
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>

            <ul className='navbar-nav flex-column text-start'>
              <li className='nav-item'>
                <NavLink activeclassname='active' className='nav-link' to='/'>
                  <FaUser className='me-2' />
                  About Me
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  activeclassname='active'
                  className='nav-link'
                  to='/portfolio'
                >
                  <FaLaptopCode className='me-2' />
                  Portfolio
                </NavLink>
              </li>

              {/* <li className='nav-item'>
                <a className='nav-link' href='services.html'>
                  <FaBriefcase className='me-2' />
                  Services &amp; Pricing
                </a>
              </li> */}
              <li className='nav-item'>
                <NavLink
                  activeclassname='active'
                  className='nav-link'
                  to='/resume'
                >
                  <FaFileLines className='me-2' />
                  Resume
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  activeclassname='active'
                  className='nav-link'
                  to='/blog'
                >
                  <FaBlog className='me-2' />
                  Blog
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  activeclassname='active'
                  className='nav-link'
                  to='/contact'
                >
                  <FaEnvelopeOpenText className='me-2' />
                  Contact
                </NavLink>
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

              <input
                className='toggle'
                id='darkmode'
                type='checkbox'
                onChange={toggleTheme}
                checked={darkMode}
              />
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
