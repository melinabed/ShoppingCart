import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <header>
        <h1>Kristian&apos;s Closet</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </div>
      </header>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="src/assets/closet.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default App;
