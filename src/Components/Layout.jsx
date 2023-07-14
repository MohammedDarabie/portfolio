import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header />
      <div className="font-mont overflow-x-hidden">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
