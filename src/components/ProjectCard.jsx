import { PropTypes } from 'prop-types';

const ProjectCard = ({ title, description, image, github, demo }) => {
  return (
    <div className='card project-card'>
      <div className='row no-gutters'>
        <div className='col-12 col-xl-5 card-img-holder'>
          <img src={image} className='card-img' alt={title} />
        </div>
        <div className='col-12 col-xl-7'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text card-text-links'>
              <a
                href={github}
                target='_blank'
                rel='noreferrer'
                className='me-5 link link-opacity-100 fw-bold'
              >
                GitHub
              </a>
              <a
                href={demo}
                target='_blank'
                rel='noreferrer'
                className='link link-opacity-100 fw-bold'
              >
                Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

export default ProjectCard;
