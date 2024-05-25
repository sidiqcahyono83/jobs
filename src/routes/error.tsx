import { useRouteError } from "react-router-dom";
interface RouteError {
  statusText?: string;
  message?: string;
}

export function ErrorRoute() {
  const error = useRouteError() as RouteError;
  //   console.error(error);

  return (
    <div id="error-page" className="flex flex-col my-4 items-center">
      <h1 className="text-pink-700 text-4xl font-bold dark:text-white">
        Oops!
      </h1>
      <p className="font-bold text-2xl">
        {" "}
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
