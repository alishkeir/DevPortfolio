import { DataContext } from '@context/DataContext';
import { useContext } from 'react';

const ResumeHeader = () => {
  const { resume } = useContext(DataContext);

  return (
    <>
      <div className='resume-header'>
        <div className='row align-items-center'>
          <div className='resume-title col-12 col-md-6 col-lg-8 col-xl-9'>
            <h2 className='resume-name mb-0 text-uppercase'>Ali Shokair</h2>
            <div className='resume-tagline mb-3 mb-md-0'>Software Engineer</div>
          </div>
          <div className='resume-contact col-12 col-md-6 col-lg-4 col-xl-3'>
            <ul className='list-unstyled mb-0'>
              <li className='mb-2'>
                <a className='resume-link' href='tel:+96171442659'>
                  +961 71 442 659
                </a>
              </li>
              <li className='mb-2'>
                <a className='resume-link' href='mailto:alishkeir_@hotmail.com'>
                  alishkeir_@hotmail.com
                </a>
              </li>
              <li className='mb-2'>
                <a
                  className='resume-link'
                  href='https://alishkeir.netlify.app/'
                >
                  Website
                </a>
              </li>
              <li className='mb-0'>Beirut, Lebanon</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='resume-intro py-3'>
        <div className='row align-items-center flex-column flex-md-row'>
          <div className='col-12 col-md-3 col-xl-2 text-center resume-profile-image mb-3 mb-md-0 me-md-4  rounded mx-auto overflow-hidden p-0 ms-md-2 m-auto mb-4'>
            <img
              className='resume-profile-image'
              src='https://gravatar.com/userimage/183874599/53d05717042f75520286f0d8d1479bcc.jpeg?size=256'
              alt='image'
            />
          </div>

          <div className='col text-start'>
            <p className='mb-0'>{resume?.heading}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeHeader;
