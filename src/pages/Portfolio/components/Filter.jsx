const Filter = () => {
  const tags = [
    {
      name: 'All',
      tag: '*',
    },
    {
      name: 'Frontend',
      tag: '.frontend',
    },
    {
      name: 'Backend',
      tag: '.backend',
    },
    {
      name: 'Full Stack',
      tag: '.fullstack',
    },
    {
      name: 'Mobile App',
      tag: '.mobile',
    },
  ];

  return (
    <div className='text-center'>
      <ul id='filters' className='filters mb-5 mx-auto   ps-0'>
        {tags &&
          tags.map((tag) => (
            <li
              key={tag.tag}
              className='type mb-3 mb-lg-0'
              data-filter={tag.tag}
            >
              {tag.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filter;
