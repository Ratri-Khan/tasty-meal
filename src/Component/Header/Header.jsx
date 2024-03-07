import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";

const Header = () => {
  const { user ,logout} = useContext(AuthContext);
  console.log(user);
  const handleLogout = () =>{
       logout()
       .then(()=>{})
       .then(error =>{console.log(error)})
  }
  return (
    <div className="navbar bg-teal-900">
      <div className="flex-1">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1  text-teal-100 text-xl">
          {user ? (
              <>
              <li
                className="cursor-pointer px-3 py-3 border border-teal-100 rounded"
                onClick={handleLogout}
              >
                logout
              </li>
              </>
          ) : (
            <>
              <li>
                <Link to="/register" className="ml-7">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="ml-7">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
