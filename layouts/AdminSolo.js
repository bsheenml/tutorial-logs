import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStatsTechnologies from "components/Headers/HeaderStatsTechnologies.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import AuthNavBar from "components/Navbars/AuthNavbar"

export default function Admin({ children }) {
  return (
    <>
      <AuthNavBar/>
      <div className="relative bg-blueGray-100 w-full">
        
        {/* Header */}
        <HeaderStatsTechnologies />
        <div className=" md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
