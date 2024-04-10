import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  function addToCartHandler() {
    //
  }
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest product
        <Link to="/search" className="findmore">
          more
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="ss1234"
          name="nike-jordan"
          price={353333}
          stock={10}
          handler={addToCartHandler}
          photo="https://media.vogue.in/wp-content/uploads/2021/10/Air-Jordans-2.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
