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
                    <i className='fab fa-twitter fa-fw'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-linkedin-in fa-fw'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-github-alt fa-fw'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-stack-overflow fa-fw'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-codepen fa-fw'></i>
                  </a>
                </li>
              </ul>
              <hr />
            </div>

            <ul className='navbar-nav flex-column text-start'>
              <li className='nav-item'>
                <a className='nav-link active' href='index.html'>
                  <i className='fas fa-user fa-fw me-2'></i>About Me
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='portfolio.html'>
                  <i className='fas fa-laptop-code fa-fw me-2'></i>Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='services.html'>
                  <i className='fas fa-briefcase fa-fw me-2'></i>Services &amp;
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='resume.html'>
                  <i className='fas fa-file-alt fa-fw me-2'></i>Resume
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='blog-home.html'>
                  <i className='fas fa-blog fa-fw me-2'></i>Blog
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='contact.html'>
                  <i className='fas fa-envelope-open-text fa-fw me-2'></i>
                  Contact
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <i className='fas fa-cogs fa-fw me-2'></i>More Pages
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='project.html'>
                      Project Page
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='blog-home.html'>
                      Blog Home 1
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='blog-home-alt.html'>
                      Blog Home 2
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='blog-post.html'>
                      Blog Post
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className='my-2'>
              <a
                className='btn btn-primary'
                href='contact.html'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fas fa-paper-plane me-2'></i>Hire Me
              </a>
            </div>

            <div className='dark-mode-toggle text-center w-100'>
              <hr className='mb-4' />
              <h4 className='toggle-name mb-3 '>
                <i className='fas fa-adjust me-1'></i>Dark Mode
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
