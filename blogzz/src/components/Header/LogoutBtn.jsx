import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button
      className="inline-bock text-2xl first-letter:text-orange-400 font-semibold text-white px-6 py-2 duration-200 hover:bg-orange-500 hover:text-black rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
