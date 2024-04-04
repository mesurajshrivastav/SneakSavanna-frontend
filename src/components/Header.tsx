import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "hdksk", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen((prev) => !prev)} to={"/"}>Home</Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button  onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen((prev) => !prev)} to={"/admin/dashboard"}>Admin</Link>
              )}
              <Link onClick={() => setIsOpen((prev) => !prev)} to={"orders"}>Orders</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <FaSignInAlt />
      )}
    </nav>
  );
};

export default Header;
