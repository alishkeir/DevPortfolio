import { useState, useEffect } from 'react';
// import { FaReact, FaSass, FaSquareJs } from 'react-icons/fa6';
import { getIconComponent } from '../../../utils/iconUtils';
import { PropTypes } from 'prop-types';

const Service = ({ icons, title, description }) => {
  const [iconComponents, setIconComponents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const components = await Promise.all(
        icons && icons.map((icon) => getIconComponent(icon))
      );
      setIconComponents(components);
    };
    fetchData();
  }, [icons]);

  return (
    <div className='item col-12 col-md-6 col-xl-4'>
      <div className='item-inner'>
        <div className='item-icon'>
          {iconComponents.map((IconComponent, index) => (
            <span key={index} className='me-1'>
              {IconComponent}
            </span>
          ))}
        </div>
        <h3 className='item-title'>{title}</h3>
        <div className='item-desc'>{description}</div>
      </div>
    </div>
  );
};

Service.propTypes = {
  icons: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Service;
