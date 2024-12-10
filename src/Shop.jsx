import { Link } from "react-router-dom";
import ProductList from "./Components/ProductList";

const ShopPage = () => {
  return (
    <>
      <h1>This is the Shop Page</h1>
      <ProductList />
      <Link to="/">Go Back</Link>
    </>
  );
};

export default ShopPage;
