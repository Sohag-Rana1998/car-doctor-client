import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Shared/Nav/Nav';

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="max-w-[1140px] mx-auto container">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
