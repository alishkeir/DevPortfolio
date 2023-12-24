import { FaReact, FaSass, FaSquareJs } from 'react-icons/fa6';

const Service = () => {
  return (
    <div className='item col-6 col-xl-4'>
      <div className='item-inner'>
        <div className='item-icon'>
          <FaSquareJs />
          <FaReact />
          <FaSass />
        </div>
        <h3 className='item-title'>Vanilla JavaScript</h3>
        <div className='item-desc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  );
};

export default Service;
