import React from "react";
import { FcGoogle } from 'react-icons/fc';
const SocialLogin = ({socialLogin}) => {
  return (
    <>
      <button
         onClick={() => socialLogin()}
        className="btn btn-outline text-xl"
      >
        {" "}
        <span className="text-3xl">
          <FcGoogle />
        </span>
        oole Login
      </button>
    </>
  );
};

export default SocialLogin;
