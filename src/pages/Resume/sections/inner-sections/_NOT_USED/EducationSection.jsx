
const EducationSection = () => {
  return (
    <section className='education-section py-3'>
    <h3 className='text-uppercase resume-section-heading mb-4'>
      Education
    </h3>
    <ul className='list-unstyled resume-education-list'>
      <li className='mb-3'>
        <div className='resume-degree font-weight-bold'>
          MSc in Computer Science
        </div>
        <div className='resume-degree-org text-muted'>
          University College London
        </div>
        <div className='resume-degree-time text-muted'>
          2010 - 2011
        </div>
      </li>
      <li>
        <div className='resume-degree font-weight-bold'>
          BSc Maths and Physics
        </div>
        <div className='resume-degree-org text-muted'>
          Imperial College London
        </div>
        <div className='resume-degree-time text-muted'>
          2007 - 2010
        </div>
      </li>
    </ul>
  </section>
  )
}

export default EducationSection