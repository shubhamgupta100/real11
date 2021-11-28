import React, { useEffect } from "react";
import ProductCard from "../Product/ProductCard";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../MetaData";
import { useAlert } from "react-alert";
import "./home.css";
import Loader from "../Loader/Loader";

export default function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title=" Home" />
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
}
