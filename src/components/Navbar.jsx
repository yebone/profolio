import React from "react";

const Navbar = () => {
  return (
    <div className=" fixed w-full h-[80px] px-4 md:px-6 lg:px-[10%] flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium cursor-pointer ">yebone.myat</h1>
      </div>
      <div>
        <h1 className="text-3xl font-medium md:hidden cursor-pointer ">
          .find( )
        </h1>
        <ul className="text-2xl font-medium cursor-pointer hidden md:flex items-center gap-3 ">
          <li>.projects( )</li>
          <li>.tools( )</li>
          <li>.about( )</li>
          <li>.contact( )</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
