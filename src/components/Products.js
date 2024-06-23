import React from "react";
import productData from "../product.json";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import custom styles

function Products() {
  const data = productData.products;

  return (
    <div className="products">
      <ul className="list-unstyled">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            brand={item.brand}
            desc={item.description}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
          />
        ))}
      </ul>
    </div>
  );
}

export default Products;
