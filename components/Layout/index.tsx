import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <Analytics />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
