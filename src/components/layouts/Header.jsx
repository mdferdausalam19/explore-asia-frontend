import useAuth from "../../hooks/useAuth";
import { FaRegUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router";

const Header = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Sign out successful.");
      navigate("/sign-in");
    });
  };
  const navLinks = (
    <>
      <li>
        <NavLink className="btn btn-outline" to={"/"}>
          Home
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink className="btn btn-outline" to={"/all-tourist-spots"}>
              All Tourist Spots
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-outline" to={"/my-list"}>
              My List
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-outline" to={"/add-tourist-spot"}>
              Add Tourist Spot
            </NavLink>
          </li>
          <li className="md:hidden">
            <button onClick={handleSignOut} className="btn btn-outline">
              Sign Out
            </button>
          </li>
        </>
      )}
      {!user && (
        <>
          <li>
            <NavLink className="btn btn-outline md:hidden" to={"/sign-in"}>
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-outline md:hidden" to={"/sign-up"}>
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-3xl">
            ExploreAsia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <>
              <p
                className="cursor-pointer tooltip tooltip-left"
                data-tip={user.displayName}
              >
                {user?.photoURL ? (
                  <img
                    className="w-10 rounded-full border border-black"
                    src={user.photoURL}
                    alt="No Photo"
                  />
                ) : (
                  <FaRegUserCircle size={40} />
                )}
              </p>
              <button
                onClick={handleSignOut}
                className="btn btn-outline hidden md:flex"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="btn btn-outline hidden md:flex">
                Sign In
              </Link>
              <Link to="/sign-up" className="btn btn-outline hidden md:flex">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
