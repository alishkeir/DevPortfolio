import { DataContext } from '@context/DataContext';
import { useContext } from 'react';

const LanguagesSection = () => {
  const { resume } = useContext(DataContext);

  return (
    <section className='skills-section py-3'>
      <h3 className='text-uppercase resume-section-heading mb-4'>Languages</h3>
      <ul className='list-unstyled resume-lang-list'>
        {resume?.languages?.map((language, index) => (
          <li className='mb-2' key={index}>
            {language}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LanguagesSection;
