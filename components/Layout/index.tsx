import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-poppins">
      <Header />
      <div className="mt-14"></div>
      <Analytics />
      {children}
      <div className="py-12"></div>
      <Footer />
    </div>
  );
};

export default Layout;
