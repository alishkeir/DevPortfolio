import { FaCircleDown } from 'react-icons/fa6';

const HeaderSection = () => {
  return (
    <section className='cta-section theme-bg-light py-5'>
      <div className='container text-center single-col-max-width'>
        <h2 className='heading mb-3'>Online Resume</h2>
        <a
          className='btn btn-primary btn-download'
          href='resume.pdf'
          download='Ali Shokair - Resume'
        >
          <FaCircleDown className='me-2' />
          Download PDF Resume
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;
