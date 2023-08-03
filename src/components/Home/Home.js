import React, { useEffect } from "react";
import './Home.css';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProductId } from "../../store/products/product.reducers";
import Product from "../Product/Product";
import ProductDetails from "../ProductDetails/ProductDetails";
import { loadProducts } from "../../store/products/products.actions";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const { selectedProductId } = useSelector((state) => state.products);

    const { isAuthenticated } = useSelector((state) => state.auth)

    const handleProductClick = (productId) => {
        if (productId === selectedProductId) {
          dispatch(setSelectedProductId(null));
        } else {
          dispatch(setSelectedProductId(productId));
        }
      };

      useEffect(() => {
        const load = async() => {
            await dispatch(loadProducts())
        }
        load();
    }, [dispatch])
  

    return(
      <div>
      <div className="home">
  {Object.keys(products).map((productId) => {

    return (
      <React.Fragment key={productId}>
        <Product
          photo={products[productId]?.photo}
          name={products[productId]?.name}
          description={products[productId]?.description}
          price={products[productId]?.price}
          productId={products[productId]?.id}
          selectedProductId={selectedProductId}
          onClick={() => handleProductClick(productId)}
        />
        {productId === selectedProductId && (
          <ProductDetails productId={productId} />
        )}
      </React.Fragment>
    );
  })}
</div>
</div>
    )
}

export default Home;