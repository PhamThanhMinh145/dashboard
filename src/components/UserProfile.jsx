import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Logout from "./Logout";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import AuthService from "../services/auth.service";
import Button from "./Button";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const { currentColor } = useStateContext();

  const currentUser = AuthService.getCurrentUser();

  return (
    <>
      <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-10 shadow-2xl">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">Profile</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          {currentUser.image === null ? (
            <img
              className="rounded-full h-24 w-24"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="user-profile"
            />
          ) : (
            <img
              className="rounded-full h-24 w-24"
              src={currentUser.image}
              alt="user-profile"
            />
          )}

          <div>
            <p className="font-semibold text-xl dark:text-gray-200">
              {/* {" "} */}
              {currentUser.owner}
            </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              {" "}
              {currentUser.roleID === 1 ? "Administrator" : "Employee"}
            </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
              {" "}
              {currentUser.accountEmail}
            </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  {item.desc}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Logout
              color="white"
              bgColor={currentColor}
              text="Logout" 
              borderRadius="10px"
              width="full"
              //onclick={logout}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
