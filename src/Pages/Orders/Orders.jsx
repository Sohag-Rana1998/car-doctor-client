import axios from 'axios';

import checkout from '/assets/images/checkout/checkout.png';

import Swal from 'sweetalert2';
import useOrderData from '../../Components/DataLoader/useOrdersData/useOrderData';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../useHooks/useAxiosSecure.jsx/useAxiosSecure';
const Orders = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useOrderData();
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/orders?email=${user?.email}`).then(data => {
        setOrders(data.data);
      });
    }
  }, [user, axiosSecure]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`https://car-doctor-server-blue-ten.vercel.app/orders/${id}`)
          .then(data => {
            console.log(data.data);
            if (data.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              refetch();
            }
          });
      }
    });
  };

  const handleUpdate = id => {
    const update = {
      status: 'Confirmed order',
    };

    Swal.fire({
      title: 'Are you sure?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update ',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://car-doctor-server-blue-ten.vercel.app/orders/${id}`,
            update
          )
          .then(data => {
            console.log(data.data);
            if (data.data?.modifiedCount > 0) {
              Swal.fire({
                title: 'Updated!',
                text: 'Your file has been Updated.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="container">
          <div className="w-full h-[300px] relative">
            <img src={checkout} alt="" className="w-full h-full rounded-xl" />
            <div className="inset-0 absolute bg-gradient-to-r from-gray-900 to-transparent rounded-xl"></div>
            <div className="absolute z-30 left-14 top-[40%] text-white">
              <h2 className="font-bold text-5xl">Cart Details</h2>
            </div>
            <div className="w-40 absolute bottom-0 left-[45%] bg-[#FF3811] text-white text-center px-3 py-2">
              Home/Checkout
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>UserName</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {orders?.map(order => (
                <tr key={order._id}>
                  <th>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className=" w-32 h-20 rounded-md">
                        <img
                          src={order.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="text-xl font-bold">{order.name}</h3>
                  </td>
                  <td>
                    {' '}
                    <h3 className="text-xl font-bold">{order.title}</h3>
                  </td>
                  <td>
                    {' '}
                    <h3 className="text-xl font-bold">${order.price}</h3>
                  </td>
                  <td>
                    {' '}
                    <h3 className="text-xl font-bold">{order.date}</h3>
                  </td>
                  <th>
                    {order.status ? (
                      <button className="bg-blue-500 p-3 rounded-3xl text-white">
                        Order Confirmed
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className=" bg-[#FF3811] text-white p-3  rounded-3xl"
                      >
                        Pending
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
