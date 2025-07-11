"use client"

const Layout = ({ children }:any) => {
  return (
    <>
        <div className="mt-24 min-h-screen flex flex-col">
          {children}
        </div>
    </>
  );
};

export default Layout;