"use client"

import { ReactNode } from "react";

const Layout = ({ children }:{children: ReactNode}) => {
  return (
    <>
        <div className="mt-24 min-h-screen flex flex-col">
          {children}
        </div>
    </>
  );
};

export default Layout;