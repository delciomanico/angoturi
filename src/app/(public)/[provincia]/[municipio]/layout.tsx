"use client"

const Layout = ({ children }:any) => {
  return (
    <>
        <div className="mt-24 min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-indigo-900 text-white">

          {children}
        </div>
    </>
  );
};

export default Layout;