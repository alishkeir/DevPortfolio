import '@assets/css/404.scss';
import '@assets/css/about.scss';
import { Link } from 'react-router-dom';

import NotFoundLogo from '@assets/img/404.gif';

const NotFoundPage = () => {
  return (
    <div className='container not-found text-center'>
      <div className='title'>
        4
        <span>
          <img src={NotFoundLogo} />
        </span>
        4
      </div>
      <p className='subtitle'>What on Earth are you doing here !?</p>
      <p className='description'>
        Well, this is awkward, the page you were trying to view does not exist.
      </p>
      <Link className='link' to='/'>
        Get yourself home!
      </Link>
    </div>
  );
};

export default NotFoundPage;
