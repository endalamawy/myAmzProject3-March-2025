// import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";
// import LowerHeader from "../Header/LowerHeader";
// import Footer from "../Footer/Footer";
// import Footer from "../Footer/Footer"

// function LayOut() {
//   return (
//     <div>
//       <Header />
//       <LowerHeader/>
//       <Outlet /> 
//       <Footer/>
//     </div>
//   );
// }

// export default LayOut;

// src/Components/LayOut.jsx

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LowerHeader from "../Header/LowerHeader";
import Footer from "../Footer/Footer"; // ✅ correct if Footer.jsx has `export default Footer`

function LayOut() {
  return (
    <div>
      <Header />
      <LowerHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayOut;

