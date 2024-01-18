import Service from '@pages/About/components/Service';
import { services } from '@db/about.json';

const ServicesListing = () => {
  return (
    <div className='row gx-5 gy-4'>
      {services &&
        services.map((service, index) => (
          <Service
            key={index}
            icons={service.icons}
            title={service.title}
            description={service.description}
          />
        ))}
    </div>
  );
};

export default ServicesListing;
