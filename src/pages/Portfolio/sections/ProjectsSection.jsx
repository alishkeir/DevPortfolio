import ProjectsListing from '@pages/Portfolio/components/ProjectsListing';
import Filter from '@pages/Portfolio/components/Filter';
import { useEffect } from 'react';

import { projects } from '@db/about.json';

const ProjectsSection = () => {
  useEffect(() => {
    const isotopeContainer = document.querySelector('.isotope');
    const filterItems = document.querySelectorAll('#filters .type');

    // eslint-disable-next-line no-undef
    var iso = new Isotope(isotopeContainer, {
      // options
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows',
    });

    // filter items on click
    filterItems.forEach((filterItem) => {
      filterItem.addEventListener('click', () => {
        let filterValue = filterItem.getAttribute('data-filter');

        // arrange - https://isotope.metafizzy.co/methods.html
        iso.arrange({ filter: filterValue });

        //toggle active class
        for (let siblingFilterItem of filterItem.parentNode.children) {
          siblingFilterItem.classList.remove('active');
        }
        filterItem.classList.add('active');
      });
    });
  });

  return (
    <section className='projects-list px-3 py-5 p-md-5'>
      <div className='container'>
        <Filter />
        <ProjectsListing projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
