import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useParams, useNavigate } from "react-router-dom";


export function getProductById(products, productId) {
  return products.find((product) => product.id === parseInt(productId)) || null;
}

function AddOrUpdateProduct({
  products,
  categories,
  getCategories,
  saveProduct,

  ...props
}) {
  const navigate = useNavigate();
  const params = useParams();
  const state = useSelector((state) => state);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }

    setProduct(getProductById(products, params.productId));

    return () => {
      setProduct({});
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      navigate("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
