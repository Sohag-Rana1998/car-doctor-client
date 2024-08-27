import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'https://car-doctor-server-blue-ten.vercel.app',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        console.log(err.response);

        if (err.response.status === 401 || err.response.status === 403) {
          console.log('log out the user');
          logOut();
          navigate('/login');
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
