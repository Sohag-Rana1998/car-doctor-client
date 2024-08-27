import { useEffect, useState } from 'react';
import Service from './Service';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get('https://car-doctor-server-blue-ten.vercel.app/services', {
        withCredentials: true,
      })
      .then(data => {
        console.log(data.data);
        setServices(data.data);
      });
  }, []);

  return (
    <div className="w-full mx-auto mt-20">
      <div>
        <div className="text-center">
          <h4 className="font-bold texl-xl text-[#FF3811]">Service</h4>
          <h1 className="text-5xl font-bold">Our Service Area</h1>
          <p className="text-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {services?.map(service => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
