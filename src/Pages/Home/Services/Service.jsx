import { Card, CardBody } from '@material-tailwind/react';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="w-full h-full">
      <Card className="p-5">
        <div className="h-52">
          <img src={img} alt="" className="w-full h-full rounded-2xl " />
        </div>
        <CardBody className="p-0">
          <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#FF3811]">
                Price: ${price}
              </h2>
              <Link to={`/checkout/${_id}`}>
                <div className="text-2xl font-bold">
                  <GrLinkNext />
                </div>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Service;
