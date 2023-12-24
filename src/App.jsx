import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  return (
    <>
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

            <div
              id='navigation'
              className='collapse navbar-collapse flex-column'
            >
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
                    <i className='fas fa-briefcase fa-fw me-2'></i>Services
                    &amp; Pricing
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
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
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

      <div className='main-wrapper'>
        <section className='about-me-section p-3 p-lg-5 theme-bg-light'>
          <div className='container'>
            <div className='profile-teaser row'>
              <div className='col'>
                <h2 className='name font-weight-bold mb-1'>Simon Doe</h2>
                <div className='tagline mb-3'>Senior Software Engineer</div>
                <div className='bio mb-4'>
                  I&apos;m a software engineer specialised in frontend and
                  backend development for complex scalable web apps. I write
                  about software development on{' '}
                  <a className='text-link' href='blog-home.html'>
                    my blog
                  </a>
                  . Want to know how I may help your project? Check out my
                  project{' '}
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
                  <a
                    className='btn btn-primary me-2 mb-3'
                    href='portfolio.html'
                  >
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

        <section className='overview-section p-3 p-lg-5'>
          <div className='container'>
            <h2 className='section-title font-weight-bold mb-3'>What I do</h2>
            <div className='section-intro mb-5'>
              I have more than 10 years experience building software for clients
              all over the world. Below is a quick overview of my main technical
              skill sets and technologies I use. Want to find out more about my
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
            <div className='row'>
              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-js-square'></i>
                  </div>
                  <h3 className='item-title'>Vanilla JavaScript</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.
                  </div>
                </div>
              </div>
              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-angular me-2'></i>
                    <i className='fab fa-react me-2'></i>
                    <i className='fab fa-vuejs'></i>
                  </div>
                  <h3 className='item-title'>Angular, React &amp; Vue</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>

              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-node-js'></i>
                  </div>
                  <h3 className='item-title'>Node.js</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>

              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-python'></i>
                  </div>
                  <h3 className='item-title'>Python &amp; Django</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>
              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-php'></i>
                  </div>
                  <h3 className='item-title'>PHP</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>
              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-npm me-2'></i>
                    <i className='fab fa-gulp me-2'></i>
                    <i className='fab fa-grunt'></i>
                  </div>
                  <h3 className='item-title'>npm, Gulp &amp; Grunt</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>
              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-html5 me-2'></i>
                    <i className='fab fa-css3-alt'></i>
                  </div>
                  <h3 className='item-title'>HTML &amp; CSS</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>
              <div className='item col-6 col-lg-3'>
                <div className='item-inner'>
                  <div className='item-icon'>
                    <i className='fab fa-sass me-2'></i>
                    <i className='fab fa-less'></i>
                  </div>
                  <h3 className='item-title'>Sass &amp; LESS</h3>
                  <div className='item-desc'>
                    List skills/technologies here. You can change the icon above
                    to any of the 1500+{' '}
                    <a
                      className='theme-link'
                      href='https://fontawesome.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      FontAwesome 5 free icons
                    </a>{' '}
                    available. Aenean commodo ligula eget dolor.{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center py-3'>
              <a href='services.html' className='btn btn-primary'>
                <i className='fas fa-arrow-alt-circle-right me-2'></i>Services
                &amp; Pricing
              </a>
            </div>
          </div>
        </section>

        <div className='container'>
          <hr />
        </div>

        <section className='testimonials-section p-3 p-lg-5'>
          <div className='container'>
            <h2 className='section-title font-weight-bold mb-5'>
              Testimonials
            </h2>

            <div className='testiomonial-carousel-container'>
              <div className='testimonial-carousel'>
                <div className='item'>
                  <div className='item-inner'>
                    <div className='quote-holder'>
                      <blockquote className='quote-content'>
                        Simon is a brilliant software engineer! Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis.
                      </blockquote>
                      <i className='fas fa-quote-left'></i>
                    </div>
                    <div className='source-holder'>
                      <div className='source-profile'>
                        <img
                          src='assets/images/clients/profile-1.png'
                          alt='image'
                        />
                      </div>
                      <div className='meta'>
                        <div className='name'>Brandon James</div>
                        <div className='info'>Project Manager, Google</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item'>
                  <div className='item-inner'>
                    <div className='quote-holder'>
                      <blockquote className='quote-content'>
                        Simon is a brilliant software engineer! Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis.
                      </blockquote>
                      <i className='fas fa-quote-left'></i>
                    </div>
                    <div className='source-holder'>
                      <div className='source-profile'>
                        <img
                          src='assets/images/clients/profile-2.png'
                          alt='image'
                        />
                      </div>
                      <div className='meta'>
                        <div className='name'>Kate Sanders</div>
                        <div className='info'>Project Manager, Uber</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item'>
                  <div className='item-inner'>
                    <div className='quote-holder'>
                      <blockquote className='quote-content'>
                        Simon is a brilliant software engineer! Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis.
                      </blockquote>
                      <i className='fas fa-quote-left'></i>
                    </div>
                    <div className='source-holder'>
                      <div className='source-profile'>
                        <img
                          src='assets/images/clients/profile-3.png'
                          alt='image'
                        />
                      </div>
                      <div className='meta'>
                        <div className='name'>James Lee</div>
                        <div className='info'>Product Manager, Amazon</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item'>
                  <div className='item-inner'>
                    <div className='quote-holder'>
                      <blockquote className='quote-content'>
                        Simon is a brilliant software engineer! Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis.
                      </blockquote>
                      <i className='fas fa-quote-left'></i>
                    </div>
                    <div className='source-holder'>
                      <div className='source-profile'>
                        <img
                          src='assets/images/clients/profile-4.png'
                          alt='image'
                        />
                      </div>
                      <div className='meta'>
                        <div className='name'>James Lee</div>
                        <div className='info'>Product Manager, Amazon</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item'>
                  <div className='item-inner'>
                    <div className='quote-holder'>
                      <blockquote className='quote-content'>
                        Simon is a brilliant software engineer! Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis.
                      </blockquote>
                      <i className='fas fa-quote-left'></i>
                    </div>
                    <div className='source-holder'>
                      <div className='source-profile'>
                        <img
                          src='assets/images/clients/profile-5.png'
                          alt='image'
                        />
                      </div>
                      <div className='meta'>
                        <div className='name'>Olivia White</div>
                        <div className='info'>Product Manager, Dropbox</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='item'>
                  <div className='item-inner'>
                    <div className='quote-holder'>
                      <blockquote className='quote-content'>
                        Simon is a brilliant software engineer! Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis.
                      </blockquote>
                      <i className='fas fa-quote-left'></i>
                    </div>
                    <div className='source-holder'>
                      <div className='source-profile'>
                        <img
                          src='assets/images/clients/profile-6.png'
                          alt='image'
                        />
                      </div>
                      <div className='meta'>
                        <div className='name'>Samuel Reyes</div>
                        <div className='info'>CTO, StartupHub</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='container'>
          <hr />
        </div>

        <section className='featured-section p-3 p-lg-5'>
          <div className='container'>
            <h2 className='section-title font-weight-bold mb-5'>
              Featured Projects
            </h2>
            <div className='row'>
              <div className='col-md-6 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-12 col-xl-5 card-img-holder'>
                      <img
                        src='assets/images/project/project-1.jpg'
                        className='card-img'
                        alt='image'
                      />
                    </div>
                    <div className='col-12 col-xl-7'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a href='project.html' className='theme-link'>
                            Project Heading
                          </a>
                        </h5>
                        <p className='card-text'>
                          Project intro lorem ipsum dolor sit amet, consectetuer
                          adipiscing elit. Cum sociis natoque penatibus et
                          magnis dis parturient montes.
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>Client: Google</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='link-mask'>
                    <a className='link-mask-link' href='project.html'></a>
                    <div className='link-mask-text'>
                      <a className='btn btn-secondary' href='project.html'>
                        <i className='fas fa-eye me-2'></i>View Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-12 col-xl-5 card-img-holder'>
                      <img
                        src='assets/images/project/project-2.jpg'
                        className='card-img'
                        alt='image'
                      />
                    </div>
                    <div className='col-12 col-xl-7'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a href='project.html' className='theme-link'>
                            Project Heading
                          </a>
                        </h5>
                        <p className='card-text'>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.{' '}
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>Client: Dropbox</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='link-mask'>
                    <a className='link-mask-link' href='project.html'></a>
                    <div className='link-mask-text'>
                      <a className='btn btn-secondary' href='project.html'>
                        <i className='fas fa-eye me-2'></i>View Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-12 col-xl-5 card-img-holder'>
                      <img
                        src='assets/images/project/project-3.jpg'
                        className='card-img'
                        alt='image'
                      />
                    </div>
                    <div className='col-12 col-xl-7'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a href='project.html' className='theme-link'>
                            Project Heading
                          </a>
                        </h5>
                        <p className='card-text'>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.{' '}
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>Client: Google</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='link-mask'>
                    <a className='link-mask-link' href='project.html'></a>
                    <div className='link-mask-text'>
                      <a className='btn btn-secondary' href='project.html'>
                        <i className='fas fa-eye me-2'></i>View Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-12 col-xl-5 card-img-holder'>
                      <img
                        src='assets/images/project/project-4.jpg'
                        className='card-img'
                        alt='image'
                      />
                    </div>
                    <div className='col-12 col-xl-7'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a href='project.html' className='theme-link'>
                            Project Heading
                          </a>
                        </h5>
                        <p className='card-text'>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.{' '}
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>Client: Uber</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='link-mask'>
                    <a className='link-mask-link' href='project.html'></a>
                    <div className='link-mask-text'>
                      <a className='btn btn-secondary' href='project.html'>
                        <i className='fas fa-eye me-2'></i>View Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center py-3'>
              <a href='portfolio.html' className='btn btn-primary'>
                <i className='fas fa-arrow-alt-circle-right me-2'></i>View
                Portfolio
              </a>
            </div>
          </div>
        </section>

        <div className='container'>
          <hr />
        </div>

        <section className='latest-blog-section p-3 p-lg-5'>
          <div className='container'>
            <h2 className='section-title font-weight-bold mb-5'>
              Latest Blog Posts
            </h2>
            <div className='row'>
              <div className='col-md-4 mb-5'>
                <div className='card blog-post-card'>
                  <img
                    className='card-img-top'
                    src='assets/images/blog/blog-post-thumb-card-1.jpg'
                    alt='image'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <a className='theme-link' href='blog-post.html'>
                        Top 3 JavaScript Frameworks
                      </a>
                    </h5>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient...
                    </p>
                    <p className='mb-0'>
                      <a className='text-link' href='blog-post.html'>
                        Read more &rarr;
                      </a>
                    </p>
                  </div>
                  <div className='card-footer'>
                    <small className='text-muted'>Published 2 days ago</small>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='card blog-post-card'>
                  <img
                    className='card-img-top'
                    src='assets/images/blog/blog-post-thumb-card-2.jpg'
                    alt='image'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <a className='theme-link' href='blog-post.html'>
                        About Remote Working
                      </a>
                    </h5>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient...
                    </p>
                    <p className='mb-0'>
                      <a className='text-link' href='blog-post.html'>
                        Read more &rarr;
                      </a>
                    </p>
                  </div>
                  <div className='card-footer'>
                    <small className='text-muted'>Published a week ago</small>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='card blog-post-card'>
                  <img
                    className='card-img-top'
                    src='assets/images/blog/blog-post-thumb-card-3.jpg'
                    alt='image'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <a className='theme-link' href='blog-post.html'>
                        A Guide to Becoming a Full-Stack Developer
                      </a>
                    </h5>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient...
                    </p>
                    <p className='mb-0'>
                      <a className='text-link' href='blog-post.html'>
                        Read more &rarr;
                      </a>
                    </p>
                  </div>
                  <div className='card-footer'>
                    <small className='text-muted'>Published 3 weeks ago</small>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center py-3'>
              <a href='blog-home.html' className='btn btn-primary'>
                <i className='fas fa-arrow-alt-circle-right me-2'></i>View Blog
              </a>
            </div>
          </div>
        </section>

        <footer className='footer text-center py-4'>
          <small className='copyright'>
            Template Copyright &copy;{' '}
            <a
              href='https://themes.3rdwavemedia.com/'
              target='_blank'
              rel='noreferrer'
            >
              3rd Wave Media
            </a>
          </small>
        </footer>
      </div>

      {/* <script src='assets/plugins/popper.min.js'></script>
      <script src='assets/plugins/bootstrap/js/bootstrap.min.js'></script>

      <script src='assets/plugins/tiny-slider/min/tiny-slider.js'></script>
      <script src='assets/js/testimonials.js'></script>

      <script src='assets/plugins/js-cookie.min.js'></script>
      <script src='assets/js/dark-mode.js'></script> */}
    </>
  );
}

export default App;
