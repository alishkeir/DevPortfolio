import { DataContext } from '@context/DataContext';
import { useContext } from 'react';

const InterestsSection = () => {
  const { resume } = useContext(DataContext);

  return (
    <section className='skills-section py-3'>
      <h3 className='text-uppercase resume-section-heading mb-4'>Interests</h3>
      <ul className='list-unstyled resume-interests-list mb-0'>
        {resume?.interests?.map((interest, index) => (
          <li className='mb-2' key={index}>
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InterestsSection;
