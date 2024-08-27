import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import checkout from '/assets/images/checkout/checkout.png';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const name = user?.displayName;
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://car-doctor-server-blue-ten.vercel.app/services/${id}`)
      .then(data => {
        console.log(data.data);
        setData(data.data);
      });
  }, [id]);
  const { price, title, service_id, img } = data;

  const handleOrderConfirmed = e => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const booking = {
      name,
      email,
      price,
      title,
      date,
      message,
      phone,
      img,
      service_id,
    };
    console.log(booking);

    axios
      .post('https://car-doctor-server-blue-ten.vercel.app/orders', booking)
      .then(data => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success('Order placed successfully');
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="w-full h-[300px] relative">
          <img src={checkout} alt="" className="w-full h-full rounded-xl" />
          <div className="inset-0 absolute bg-gradient-to-r from-gray-900 to-transparent rounded-xl"></div>
          <div className="absolute z-30 left-14 top-[40%] text-white">
            <h2 className="font-bold text-5xl">Check Out</h2>
          </div>
          <div className="w-40 absolute bottom-0 left-[45%] bg-[#FF3811] text-white text-center px-3 py-2">
            Home/Checkout
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full min-h-screen bg-base-200 p-5 md:p-20">
          <form onSubmit={handleOrderConfirmed} className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name (read only)</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={name}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email (read only)</span>
                </label>
                <input
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Your Message"
                className="textarea rounded-xl w-full"
              ></textarea>
            </div>
            <input
              type="submit"
              value={'Order Confirm'}
              className="w-full bg-[#FF3811] btn text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
