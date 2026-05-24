import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="ErrorImg">
        <Link to="/">
          <img
            src="https://www.allconnect.com/wp-content/uploads/2024/04/GettyImages-1295689699.jpg"
            alt="Error - 404"
          />
        </Link>
      </div>
    );
  }
};
export default ErrorPage;
