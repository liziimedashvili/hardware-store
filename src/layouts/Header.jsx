/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  

  return (
    <header className=" bg-[#f2f0f0]">
      <div className="custom-container h-[70px] ">
        <div>
          <Link to="/">
            <h5>gamarjoba megobrebo</h5>
          </Link>
        </div>
        
      </div>
    </header>
  );
}
