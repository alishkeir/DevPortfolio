import { useState, useEffect } from 'react';
// import { FaReact, FaSass, FaSquareJs } from 'react-icons/fa6';
import { getIconComponent } from '../../../utils/iconUtils';

const Service = () => {
  const [iconComponents, setIconComponents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { icon: 'FaReact' },
        { icon: 'FaSass' },
        { icon: 'SiNextdotjs' },
      ];

      const components = await Promise.all(
        data.map((item) => getIconComponent(item.icon))
      );
      setIconComponents(components);
    };
    fetchData();
  }, []);

  return (
    <div className='item col-6 col-xl-4'>
      <div className='item-inner'>
        <div className='item-icon'>
          {iconComponents.map((IconComponent, index) => (
            <span key={index}>{IconComponent}</span>
          ))}
        </div>
        <h3 className='item-title'>Vanilla JavaScript</h3>
        <div className='item-desc'>
          I specialize in creating captivating web experiences using HTML, CSS,
          and JavaScript. These foundational technologies enable me to build
          dynamic and responsive websites with a focus on user engagement.
        </div>
      </div>
    </div>
  );
};

export default Service;
