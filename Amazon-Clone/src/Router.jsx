

// // Original
// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import Landing from './Pages/Landing/Landing.jsx'; // ✅ Make sure this file exists and is fixed
// import SignIn from './Pages/Auth/Signup';
// import Payment from './Pages/Payment/Payment';
// import Orders from './Pages/Orders/Orders';
// import Cart from './Pages/Cart/Cart';

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<SignIn />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;
import { Routes, Route } from "react-router-dom";
import LayOut from "./Componenets/LayOut/LayOut";
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetails from "./Pages/ProductDetail/ProductDetail";

function Routing() {
  return (
    <Routes>
      {/* All routes share LayOut (Header + children) */}
      <Route element={<LayOut />}>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />

        {/* Category page */}
        <Route path="/category/:categoryName" element={<Results />} />

        {/* Product details page */}
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default Routing;
