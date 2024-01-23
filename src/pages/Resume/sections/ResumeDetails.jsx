import ResumeHeader from '@pages/Resume/sections/inner-sections/ResumeHeader';
import ResumeBody from '@pages/Resume/sections/inner-sections/ResumeBody';
import RedumeFooter from '@pages/Resume/sections/inner-sections/RedumeFooter';

const ResumeDetails = () => {
  return (
    <div className='container resume-container px-3 px-lg-5'>
      <article className='resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg'>
        <ResumeHeader />
        <hr />
        <ResumeBody />
        <hr />
        <RedumeFooter />
      </article>
    </div>
  );
};

export default ResumeDetails;
