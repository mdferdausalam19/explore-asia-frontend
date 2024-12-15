import { useRouteError } from "react-router";


const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3 font-poppins">
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
