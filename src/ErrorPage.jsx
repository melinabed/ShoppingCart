import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Oops! There was an error.</h1>
      <Link to="/">Return Home</Link>
    </>
  );
};

export default ErrorPage;
