import React from "react";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartSummary from "../cart/CartSummary";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route
            path="/saveproduct/:productId"
            element={<AddOrUpdateProduct />}
          />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/cart-summary" element={<CartSummary />} />

          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
