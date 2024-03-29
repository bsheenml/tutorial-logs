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
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 w-8/12">
        
        {/* Header */}
        <AuthNavBar></AuthNavBar>
        <HeaderStatsTechnologies />
        <div className=" md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
