import { FC, useState } from "react";
import logo from "../assets/logo.jpg";
import Input from "../components/Ui/Input";
import profileIcon from "../assets/profile.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../data/data";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput) {
      navigate(`/search?iq=${searchInput}`);
    }
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-opacity-75 bg-neutral-600">
      <div className="container flex items-center h-full px-2 mx-auto md:px-0">
        <Link className="overflow-auto rounded-full" to="/">
          <img src={logo} alt="Logo" width={70} />
        </Link>

        <nav className="items-center hidden gap-1 ml-5 lg:flex">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.name}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.name}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 ml-auto ">
          <form className="">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-md"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                previcon={
                  <IoSearchOutline
                    className="text-2xl cursor-pointer text-slate-100"
                    onClick={handleSearch}
                  />
                }
              />
            </div>
          </form>
          <div className="cursor-pointer ">
            <img src={profileIcon} alt="Logo" width={40} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
