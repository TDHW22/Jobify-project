import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

function Profile() {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  return <h1>Profile Page</h1>;
}

export default Profile;
