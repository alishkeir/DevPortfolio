import { DataContext } from '@context/DataContext';
import { useContext } from 'react';

const CertificatesSection = () => {
  const { resume } = useContext(DataContext);

  return (
    <section className='education-section py-3'>
      <h3 className='text-uppercase resume-section-heading mb-4'>
        Certificates
      </h3>
      <ul className='list-unstyled resume-awards-list'>
        {resume?.certificates?.map((certificate, index) => (
          <li className='mb-3' key={index}>
            <div className='font-weight-bold'>{certificate}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificatesSection;
