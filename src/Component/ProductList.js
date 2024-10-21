import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT_DETAILS } from "../GraphQl/Query";
import { useEffect, useState } from "react";
import '../CSS/product.css'


function ProductList() {
  let { data } = useQuery(GET_ALL_PRODUCT_DETAILS);
  let [productList, setProductList] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      setProductList(data.getProducts);
    }
  }, [data]);

  return (
    <>
      <section className="container my-5">
        <section className="row justify-content-center g-5">
          {productList.map((product, index) => (
            <article
              key={index}
              className="card col-12 col-md-6 col-lg-4 col-xl-3 p-0 shadow-sm product-card"
              title={product.title}
            >
              <img
                src={product.image}
                className="card-img-top"
                style={{ height: "15rem", objectFit: "cover" }}
                alt={product.title}
              />
              <section className="card-body text-center ">
                <h5 className="card-title">{product.title.substring(0, 20)}</h5>
                <p className="card-text fw-bold text-primary">${product.price}</p>
                <a href="#" className="btn btn-gradient">Explore</a>
              </section>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}

export default ProductList;
