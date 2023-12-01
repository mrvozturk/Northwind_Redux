import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes, Route} from "react-router-dom";
import CartSummary from "../cart/CartSummary";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
         
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/cart-summary" element={<CartSummary />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
