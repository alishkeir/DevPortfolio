import { DataContext } from '@context/DataContext';
import { useContext } from 'react';

const WorkSection = () => {
  const { resume } = useContext(DataContext);

  return (
    <section className='work-section py-3'>
      <h3 className='text-uppercase resume-section-heading mb-4'>
        Work Experiences
      </h3>

      {resume?.experience &&
        resume?.experience?.map((exp, index) => (
          <div className='item mb-5' key={index}>
            <div className='item-heading row align-items-center mb-2'>
              <h4 className='item-title col-12 col-md-6  mb-2 mb-md-0'>
                {exp.title}
              </h4>
              <div className='item-meta col-12 col-md-6  text-muted text-start text-md-end'>
                {exp.company} | {exp.date}
              </div>
            </div>

            <div className='item-content'>
              <ul className='resume-list'>
                {exp.tasks.map((task, index) => (
                  <li className='mb-2 mb-xl-0' key={index}>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </section>
  );
};

export default WorkSection;
