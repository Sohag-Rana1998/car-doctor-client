import { Link } from 'react-router-dom';
import errorImg from '/error.jpg';

const ErrorPage = () => {
  return (
    <div className="max-w-7xl container max-h-screen mx-auto h-full p-5">
      <div className="w-full h-full">
        <img src={errorImg} alt="" className="w-full h-full rounded-2xl p-5" />
      </div>
      <div className="flex w-full justify-end">
        <Link to={'/'}>
          {' '}
          <button className="btn bg-blue-400 w-40 ">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
