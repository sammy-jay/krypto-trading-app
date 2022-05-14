import React from "react";
import MenuItem from "../smallercomponents/MenuItem";
import { RiDashboardLine } from "react-icons/ri";
import { RiExchangeBoxLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RiExchangeFundsLine } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BiBarChart } from "react-icons/bi";
import "./SideBar.css";

const allMenu = [
  {
    id: 1,
    Icon: RiDashboardLine,
    text: "dashboard",
    location: "dashboard",
    selected: true,
  },
  {
    id: 2,
    Icon: IoWalletOutline,
    text: "my wallet",
    location: "wallet",
    selected: false,
  },
  {
    id: 3,
    Icon: RiExchangeFundsLine,
    text: "transactions",
    location: "transactions",
    selected: false,
  },
  {
    id: 4,
    Icon: RiExchangeDollarLine,
    text: "trading",
    location: "trading",
    selected: false,
  },
  {
    id: 5,
    Icon: RiExchangeBoxLine,
    text: "Screener",
    location: "exchange",
    selected: false,
  },
  {
    id: 6,
    Icon: BiBarChart,
    text: "market cap",
    location: "marketcap",
    selected: false,
  },

  {
    id: 7,
    Icon: IoSettingsOutline,
    text: "settings",
    location: "settings",
    selected: false,
  },
];
const SideBar = () => {
  const [menuItems, setMenuItems] = React.useState(allMenu);

  const handleClick = (id) => {
    const newMenu = allMenu.map((item) => {
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
    setMenuItems(newMenu);
  };

  return (
    <div className="sidebar">
      <h1>Jiade</h1>
      <p className="sidebar-p">Main Menu</p>
      {menuItems.slice(0, -1).map((item) => {
        return (
          <section key={item.id} onClick={() => handleClick(item.id)}>
            <MenuItem {...item} />
          </section>
        );
      })}

      <p className="sidebar-p">Others</p>
      {menuItems.slice(-1).map((item) => {
        return (
          <section key={item.id} onClick={() => handleClick(item.id)}>
            <MenuItem {...item} />
          </section>
        );
      })}
    </div>
  );
};

export default SideBar;
