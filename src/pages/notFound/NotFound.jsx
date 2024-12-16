import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3 font-poppins text-center">
      <h2 className="text-5xl">Oops! Page Not Found</h2>
      <p className="text-3xl">
        The page you're looking for doesn't exist. Return to the homepage to
        explore.
      </p>
      <Link to={"/"} className="btn">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
