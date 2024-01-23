import WorkSection from '@pages/Resume/sections/inner-sections/body/WorkSection';
import SkillsSection from '@pages/Resume/sections/inner-sections/body/SkillsSection';
import CertificatesSection from '@pages/Resume/sections/inner-sections/body/CertificatesSection';
import LanguagesSection from '@pages/Resume/sections/inner-sections/body/LanguagesSection';
import InterestsSection from '@pages/Resume/sections/inner-sections/body/InterestsSection';

const ResumeBody = () => {
  return (
    <div className='resume-body'>
      <div className='row'>
        <div className='resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5'>
          <WorkSection />
        </div>
        <aside className='resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4'>
          <SkillsSection />

          <CertificatesSection />

          <LanguagesSection />

          <InterestsSection />
        </aside>
      </div>
    </div>
  );
};

export default ResumeBody;
