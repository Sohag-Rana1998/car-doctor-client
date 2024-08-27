import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';

const useOrderData = () => {
  const { user } = useContext(AuthContext);

  const email = user?.email;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch(
        `https://car-doctor-server-blue-ten.vercel.app/orders?email=${email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useOrderData;
