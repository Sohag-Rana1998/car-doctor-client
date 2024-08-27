import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from '@material-tailwind/react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className="w-full min-h-screen flex justify-center items-center">
          <Spinner className="h-16 w-16 text-blue-900" />;
        </div>
      </>
    );
  }
  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};
export default PrivateRoute;
