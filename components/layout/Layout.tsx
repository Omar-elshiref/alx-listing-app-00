import Header from "./Header";
import Footer from "./Footer";
import React from "react";

// استخدم PropsWithChildren لتصحيح النوع
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;