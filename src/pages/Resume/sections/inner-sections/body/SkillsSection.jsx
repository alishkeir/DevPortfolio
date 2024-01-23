import { DataContext } from '@context/DataContext';
import { useContext } from 'react';

const SkillsSection = () => {
  const { resume } = useContext(DataContext);


  return (
    <section className='skills-section py-3'>
      <h3 className='text-uppercase resume-section-heading mb-4'>Skills</h3>
      <div className='item'>
        <h4 className='item-title'>Technical</h4>
        <ul className='list-unstyled resume-skills-list'>
          {resume?.skills?.technical?.map((skill, index) => (
            <li className='mb-2' key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className='item'>
        <h4 className='item-title'>Professional</h4>
        <ul className='list-unstyled resume-skills-list'>
          {resume?.skills?.professional?.map((skill, index) => (
            <li className='mb-2' key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
