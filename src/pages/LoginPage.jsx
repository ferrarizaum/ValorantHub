import React from "react";
import { useUserName } from "../components/UserNameProvider";

const LoginPage = () => {
  const { userName, updateUsername } = useUserName();

  const handleChange = (event) => {
    updateUsername(event.target.value);
  };
  return (
    <>
      <div>login</div>
    </>
  );
};

export default LoginPage;
