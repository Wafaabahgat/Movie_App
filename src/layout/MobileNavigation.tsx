import { FC } from "react";
import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../data/data";

interface MobileNavigationProps {}

const MobileNavigation: FC<MobileNavigationProps> = () => {
  return (
    <section className="fixed bottom-0 w-full py-4 text-white bg-neutral-600 lg:hidden">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return (
            <div>
              <NavLink
                key={nav.name}
                to={nav.href}
                className={({ isActive }) =>
                  `px-3 hover:text-neutral-100 flex items-center flex-col h-full ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                <div className="text-2xl"> {nav.icon}</div>
                <p className="text-sm"> {nav.name}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
