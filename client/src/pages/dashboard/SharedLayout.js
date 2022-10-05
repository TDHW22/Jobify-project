import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
//Creating shared layout for protected routes
function SharedLayout() {
  return (
    <Wrapper>
      <nav>
        <Link to="Add-Job">Add Job</Link>
        <Link to="All-Jobs">All Jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
}

export default SharedLayout;
