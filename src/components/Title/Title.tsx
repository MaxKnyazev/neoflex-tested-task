import './Title.scss';
import { Link } from 'react-router-dom';

export const Title: React.FC = () => {
  return (
    <Link to='/'>
      <h1 className='title'>QPICK</h1>
    </Link>
  );
}
