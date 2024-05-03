import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaBagShopping } from 'react-icons/fa6';

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'active btn border-2 border-blue-500 bg-gray-100 text-blue-300 font-bold'
              : isPending
              ? 'pending'
              : 'btn'
          }
        >
          Home
          {/* other code */}
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          to={'/about'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'active btn border-2 border-blue-500 bg-gray-100 text-blue-300 font-bold'
              : isPending
              ? 'pending '
              : 'btn'
          }
        >
          About
          {/* other code */}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/service'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'active btn border-2 border-blue-500 bg-gray-100 text-blue-300 font-bold'
              : isPending
              ? 'pending '
              : 'btn'
          }
        >
          Service
          {/* other code */}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/blog'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'active btn border-2 border-blue-500 bg-gray-100 text-blue-300 font-bold'
              : isPending
              ? 'pending '
              : 'btn'
          }
        >
          Blog
          {/* other code */}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/contact'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'active btn border-2 border-blue-500 bg-gray-100 text-blue-300 font-bold'
              : isPending
              ? 'pending '
              : 'btn'
          }
        >
          Contact
          {/* other code */}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar h-auto bg-slate-100 w-full container mx-auto">
      <div className="navbar-start h-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl h-auto">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={logo} alt="" className="w-[75px] h-10 rounded-md" />
            <h4>Car Doctor</h4>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
      </div>
      <div className="navbar-end ml-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            {' '}
            <input type="text" name="" id="" className="input rounded-lg" />
            <FaMagnifyingGlass className="absolute left-5 top-4" />
          </div>
          <button className="btn w-20">
            <FaBagShopping />
          </button>
          <button className="btn py-2 border-orange-400 border-2 text-orange-500 font-bold">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
