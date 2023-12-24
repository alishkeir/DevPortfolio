const ProjectCard = () => {
  return (
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
              Project intro lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Cum sociis natoque penatibus et magnis dis parturient
              montes.
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
  );
};

export default ProjectCard;
