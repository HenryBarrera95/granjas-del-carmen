import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

// aqui para traer el user y el loading debo hacerlo con props

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
